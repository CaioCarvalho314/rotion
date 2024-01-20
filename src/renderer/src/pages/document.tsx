/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useParams } from 'react-router-dom'
import Editor, { OnContentUpdatedParams } from '../components/Editor'
import { ToC } from '../components/ToC'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { Document as IPCDocument } from '~/src/shared/@types/ipc'

export default function Document() {
  const { id } = useParams<{ id: string }>()
  const queryClient = useQueryClient()
  const { data, isFetching } = useQuery({
    queryKey: ['documents', id],
    queryFn: async () => {
      const response = await window.api.fetchDocument({ id: id! })
      return response.data
    },
  })

  const { mutateAsync } = useMutation({
    mutationFn: async ({ title, content }: OnContentUpdatedParams) => {
      await window.api.saveDocument({
        id: id!,
        title,
        content,
      })
    },
    onSuccess: (_, { title }) => {
      queryClient.setQueryData(
        ['documents'],
        (prevDocuments: IPCDocument[]) => {
          return prevDocuments.map((document) => {
            if (document.id === id) {
              return { ...document, title }
            }
            return document
          })
        },
      )
    },
  })

  const initialContent = useMemo(() => {
    if (data) {
      return `<h1>${data.title}</h1> ${data.content ?? '<p></p>'}`
    }
    return ''
  }, [data])

  function handleEditorContentUpdated({
    title,
    content,
  }: OnContentUpdatedParams) {
    mutateAsync({ title, content })
  }

  return (
    <main className="flex-1 flex py-12 px-10 gap-8">
      <aside className="hidden lg:block sticky top-8">
        <span className={'text-rotion-300 font-semibold text-xs '}>
          TABLE OF CONTENTS
        </span>
        <ToC.Root>
          <ToC.Link>Back-End</ToC.Link>
          <ToC.Section>
            <ToC.Link>Banco de Dados</ToC.Link>
            <ToC.Link>Autenticação</ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>
      <section className="flex-1 flex flex-col items-center">
        {!isFetching && data && (
          <Editor
            onContentUpdated={handleEditorContentUpdated}
            content={initialContent}
          />
        )}
      </section>
    </main>
  )
}
