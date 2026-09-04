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
      className="add-form"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Điều bạn muốn làm trong đời..."
        className="add-input"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="category-select"
      >
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="add-button"
      >
        Thêm
      </button>
    </form>
  )
}
