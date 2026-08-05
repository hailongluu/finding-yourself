import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { useBucketList } from '../hooks/useBucketList'
import { ProgressHeader } from '../components/ProgressHeader'
import { AddItemForm } from '../components/AddItemForm'
import { BucketItemRow } from '../components/BucketItemRow'
import { EmptyState } from '../components/EmptyState'

type Filter = 'all' | 'active' | 'done'

export function BucketListPage() {
  const { signOut, session } = useAuth()
  const { items, loading, addItem, toggleItem, removeItem } = useBucketList()
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = useMemo(() => {
    if (filter === 'active') return items.filter((i) => !i.is_done)
    if (filter === 'done') return items.filter((i) => i.is_done)
    return items
  }, [items, filter])

  const doneCount = items.filter((i) => i.is_done).length

  return (
    <div className="mx-auto min-h-screen max-w-2xl px-6 py-12">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-xs text-neutral-400 dark:text-neutral-500">{session?.user.email}</span>
        <button
          onClick={signOut}
          className="text-xs text-neutral-500 underline dark:text-neutral-400"
        >
          Đăng xuất
        </button>
      </div>

      <ProgressHeader total={items.length} done={doneCount} />
      <AddItemForm onAdd={addItem} />

      <div className="mb-4 flex gap-1 text-sm">
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
            className={`rounded-full px-3 py-1 transition-colors ${
              filter === key
                ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                : 'text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {!loading && filtered.length === 0 && <EmptyState />}

      <ul className="flex flex-col gap-2">
        <AnimatePresence initial={false}>
          {filtered.map((item) => (
            <BucketItemRow key={item.id} item={item} onToggle={toggleItem} onRemove={removeItem} />
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
}
