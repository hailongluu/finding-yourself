import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { useBucketList } from '../hooks/useBucketList'
import { ProgressHeader } from '../components/ProgressHeader'
import { AddItemForm } from '../components/AddItemForm'
import { BucketItemRow } from '../components/BucketItemRow'
import { EmptyState } from '../components/EmptyState'
import { TemplatePicker } from '../components/TemplatePicker'
import { TEMPLATES, type TemplateId } from '../templates'

type Filter = 'all' | 'active' | 'done'

export function BucketListPage() {
  const { signOut, session } = useAuth()
  const { items, loading, addItem, toggleItem, removeItem } = useBucketList()
  const [filter, setFilter] = useState<Filter>('all')
  const [pickerOpen, setPickerOpen] = useState(false)
  const [template, setTemplate] = useState<TemplateId>(() => {
    const saved = localStorage.getItem('bucket-list-template')
    return TEMPLATES.some((item) => item.id === saved) ? (saved as TemplateId) : 'paper'
  })

  function selectTemplate(next: TemplateId) {
    setTemplate(next)
    localStorage.setItem('bucket-list-template', next)
    setPickerOpen(false)
  }

  const filtered = useMemo(() => {
    if (filter === 'active') return items.filter((i) => !i.is_done)
    if (filter === 'done') return items.filter((i) => i.is_done)
    return items
  }, [items, filter])

  const doneCount = items.filter((i) => i.is_done).length

  return (
    <main className={`bucket-app theme-${template}`}>
      <div className="bucket-shell">
      <div className="account-bar">
        <span className="text-xs text-neutral-400 dark:text-neutral-500">{session?.user.email}</span>
        <div className="account-actions">
          <button className="style-button" onClick={() => setPickerOpen(true)}>
            <span aria-hidden="true">◐</span> Đổi giao diện
          </button>
          <button onClick={signOut} className="signout-button">Đăng xuất</button>
        </div>
      </div>

      <section className="bucket-board">
        <div className="board-decoration" aria-hidden="true"><span>Dream</span><span>Plan</span><span>Live</span></div>
        <ProgressHeader total={items.length} done={doneCount} />
        <AddItemForm onAdd={addItem} />

      <div className="filter-bar">
        {(
          [
            ['all', 'Tất cả'],
            ['active', 'Chưa hoàn thành'],
            ['done', 'Đã hoàn thành'],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={filter === key ? 'is-active' : ''}
          >
            {label}
          </button>
        ))}
      </div>

      {!loading && filtered.length === 0 && <EmptyState />}

      <ul className="bucket-items">
        <AnimatePresence initial={false}>
          {filtered.map((item) => (
            <BucketItemRow key={item.id} item={item} onToggle={toggleItem} onRemove={removeItem} />
          ))}
        </AnimatePresence>
      </ul>
      </section>
      </div>
      <TemplatePicker open={pickerOpen} selected={template} onSelect={selectTemplate} onClose={() => setPickerOpen(false)} />
    </main>
  )
}
