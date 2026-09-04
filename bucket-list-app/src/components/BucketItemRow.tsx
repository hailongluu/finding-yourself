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
      className="bucket-item group"
    >
      <button
        onClick={() => onToggle(item.id, !item.is_done)}
        aria-label={item.is_done ? 'Đánh dấu chưa hoàn thành' : 'Đánh dấu hoàn thành'}
        className={`item-check ${item.is_done ? 'is-done' : ''}`}
      >
        {item.is_done && (
          <svg viewBox="0 0 12 12" className="check-icon" strokeWidth={2}>
            <path d="M2 6l2.5 2.5L10 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <div className="item-copy">
        <p
          className={item.is_done ? 'item-title is-done' : 'item-title'}
        >
          {item.title}
        </p>
        <span className="item-category">{item.category}</span>
      </div>

      <button
        onClick={() => onRemove(item.id)}
        aria-label="Xoá"
        className="remove-button"
      >
        <svg viewBox="0 0 16 16" className="h-4 w-4 fill-none stroke-current" strokeWidth={1.5}>
          <path d="M3 4h10M6.5 4V2.5h3V4M4.5 4l.5 9.5a1 1 0 001 1h4a1 1 0 001-1L11.5 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </motion.li>
  )
}
