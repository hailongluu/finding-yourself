interface ProgressHeaderProps {
  total: number
  done: number
}

export function ProgressHeader({ total, done }: ProgressHeaderProps) {
  const percent = total === 0 ? 0 : Math.round((done / total) * 100)

  return (
    <header className="progress-header">
      <p className="progress-eyebrow">Dream it · plan it · do it</p>
      <div className="progress-heading">
        <h1>
          My Bucket List
        </h1>
        <span className="progress-count">
          {done}/{total} hoàn thành
        </span>
      </div>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        />
      </div>
    </header>
  )
}
