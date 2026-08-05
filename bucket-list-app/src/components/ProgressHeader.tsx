interface ProgressHeaderProps {
  total: number
  done: number
}

export function ProgressHeader({ total, done }: ProgressHeaderProps) {
  const percent = total === 0 ? 0 : Math.round((done / total) * 100)

  return (
    <header className="mb-8">
      <div className="flex items-baseline justify-between">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          My Bucket List
        </h1>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          {done}/{total} hoàn thành
        </span>
      </div>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
        <div
          className="h-full rounded-full bg-neutral-900 transition-[width] duration-500 ease-out dark:bg-neutral-100"
          style={{ width: `${percent}%` }}
        />
      </div>
    </header>
  )
}
