import { useState, type FormEvent } from 'react'
import { CATEGORIES } from '../types'

interface AddItemFormProps {
  onAdd: (title: string, category: string) => void
}

export function AddItemForm({ onAdd }: AddItemFormProps) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState<string>(CATEGORIES[0])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return
    onAdd(trimmed, category)
    setTitle('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 sm:flex-row"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Điều bạn muốn làm trong đời..."
        className="flex-1 rounded-xl bg-transparent px-3 py-2 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 dark:text-neutral-100"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
      >
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
      >
        Thêm
      </button>
    </form>
  )
}
