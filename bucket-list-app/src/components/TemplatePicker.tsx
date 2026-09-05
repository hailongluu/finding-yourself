import { useEffect, useRef } from 'react'
import { TEMPLATES, type TemplateId } from '../templates'

interface TemplatePickerProps {
  open: boolean
  selected: TemplateId
  onSelect: (id: TemplateId) => void
  onClose: () => void
}

export function TemplatePicker({ open, selected, onSelect, onClose }: TemplatePickerProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="template-overlay" role="presentation" onMouseDown={onClose}>
      <section
        className="template-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="template-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="template-panel-head">
          <div>
            <p className="template-kicker">Giao diện của bạn</p>
            <h2 id="template-title">Câu chuyện của bạn trông thế nào?</h2>
          </div>
          <button ref={closeRef} className="template-close" onClick={onClose} aria-label="Đóng">×</button>
        </div>
        <div className="template-grid">
          {TEMPLATES.map((template) => (
            <button
              key={template.id}
              className={`template-card preview-${template.id} ${selected === template.id ? 'is-selected' : ''}`}
              onClick={() => onSelect(template.id)}
              aria-pressed={selected === template.id}
            >
              <span className="template-preview" aria-hidden="true">
                <span className="preview-glyph">{template.glyph}</span>
                <span className="preview-heading">Bucket list</span>
                <span className="preview-line preview-line-one" />
                <span className="preview-line preview-line-two" />
                <span className="preview-line preview-line-three" />
              </span>
              <span className="template-card-copy">
                <span><b>{template.name}</b><small>{template.note}</small></span>
                <span className="template-check">✓</span>
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
