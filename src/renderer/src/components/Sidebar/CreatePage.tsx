/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'phosphor-react'

export function CreatePage() {
  const queryClient = useQueryClient()
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {
      const response = await window.api.createDocument()
      return response.data
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['documents'], (prevDocuments: Document[]) => {
        if (prevDocuments && prevDocuments.length >= 0) {
          return [...prevDocuments, data]
        } else {
          return [data]
        }
      })
    },
  })

  return (
    <button
      disabled={isPending}
      onClick={() => mutateAsync()}
      className="flex w-[240px] px-5 items-center text-sm gap-2 absolute bottom-0 left-0 right-0 py-4 border-t border-rotion-600 hover:bg-rotion-700 disabled:opacity-60"
    >
      <Plus className="h-4 w-4" />
      Novo documento
    </button>
  )
}
