import { MagnifyingGlass } from 'phosphor-react'
import { SearchBar } from '../SearchBar'
import { useState } from 'react'

export function Search() {
  const [open, setOpen] = useState(false)

  function onToggleOpen(isOpen: boolean) {
    setOpen(isOpen)
  }

  return (
    <>
      <button
        onClick={() => onToggleOpen(true)}
        className="flex mx-5 items-center gap-2 text-rotion-100 text-sm hover:text-rotion-50"
      >
        <MagnifyingGlass className="w-5 h-5" />
        Busca rápida
      </button>
      <SearchBar open={open} onToggleOpen={onToggleOpen} />
    </>
  )
}
