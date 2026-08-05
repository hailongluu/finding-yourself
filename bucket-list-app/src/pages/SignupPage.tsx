import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'

export function SignupPage() {
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    const { error } = await signUp(email, password)
    setSubmitting(false)
    if (error) {
      setError(error)
      return
    }
    navigate('/confirm-notice', { state: { email } })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-6"
    >
      <h1 className="mb-1 text-xl font-semibold text-neutral-900 dark:text-neutral-50">
        Tạo tài khoản
      </h1>
      <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        Bắt đầu ghi lại những điều bạn muốn làm trong đời.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
        />
        <input
          type="password"
          required
          minLength={6}
          placeholder="Mật khẩu (tối thiểu 6 ký tự)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={submitting}
          className="mt-1 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700 disabled:opacity-50 dark:bg-neutral-100 dark:text-neutral-900"
        >
          {submitting ? 'Đang tạo...' : 'Đăng ký'}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
        Đã có tài khoản?{' '}
        <Link to="/login" className="font-medium text-neutral-900 underline dark:text-neutral-100">
          Đăng nhập
        </Link>
      </p>
    </motion.div>
  )
}
