import { motion } from 'framer-motion'
import type { BucketItem } from '../types'

interface BucketItemRowProps {
  item: BucketItem
  onToggle: (id: string, isDone: boolean) => void
  onRemove: (id: string) => void
}

export function BucketItemRow({ item, onToggle, onRemove }: BucketItemRowProps) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="group flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
    >
      <button
        onClick={() => onToggle(item.id, !item.is_done)}
        aria-label={item.is_done ? 'Đánh dấu chưa hoàn thành' : 'Đánh dấu hoàn thành'}
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
          item.is_done
            ? 'border-neutral-900 bg-neutral-900 dark:border-neutral-100 dark:bg-neutral-100'
            : 'border-neutral-300 dark:border-neutral-600'
        }`}
      >
        {item.is_done && (
          <svg viewBox="0 0 12 12" className="h-3 w-3 fill-none stroke-white dark:stroke-neutral-900" strokeWidth={2}>
            <path d="M2 6l2.5 2.5L10 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <div className="min-w-0 flex-1">
        <p
          className={`truncate text-sm ${
            item.is_done
              ? 'text-neutral-400 line-through dark:text-neutral-600'
              : 'text-neutral-900 dark:text-neutral-100'
          }`}
        >
          {item.title}
        </p>
        <span className="text-xs text-neutral-400 dark:text-neutral-500">{item.category}</span>
      </div>

      <button
        onClick={() => onRemove(item.id)}
        aria-label="Xoá"
        className="shrink-0 rounded-lg p-1.5 text-neutral-300 opacity-0 transition-opacity hover:text-red-500 group-hover:opacity-100 dark:text-neutral-600"
      >
        <svg viewBox="0 0 16 16" className="h-4 w-4 fill-none stroke-current" strokeWidth={1.5}>
          <path d="M3 4h10M6.5 4V2.5h3V4M4.5 4l.5 9.5a1 1 0 001 1h4a1 1 0 001-1L11.5 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </motion.li>
  )
}
