import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'

export function LoginPage() {
  const { signIn, resendConfirmation } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [resent, setResent] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setResent(false)
    setSubmitting(true)
    const { error } = await signIn(email, password)
    setSubmitting(false)
    if (error) {
      setError(error)
      return
    }
    navigate('/', { replace: true })
  }

  async function handleResend() {
    await resendConfirmation(email)
    setResent(true)
  }

  const needsConfirmation = error?.toLowerCase().includes('confirm')

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-6"
    >
      <h1 className="mb-1 text-xl font-semibold text-neutral-900 dark:text-neutral-50">
        Đăng nhập
      </h1>
      <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        Chào mừng quay lại bucket list của bạn.
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
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        {needsConfirmation && (
          <button
            type="button"
            onClick={handleResend}
            className="text-left text-sm text-neutral-500 underline dark:text-neutral-400"
          >
            {resent ? 'Đã gửi lại email xác nhận' : 'Gửi lại email xác nhận'}
          </button>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="mt-1 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700 disabled:opacity-50 dark:bg-neutral-100 dark:text-neutral-900"
        >
          {submitting ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
        Chưa có tài khoản?{' '}
        <Link to="/signup" className="font-medium text-neutral-900 underline dark:text-neutral-100">
          Đăng ký
        </Link>
      </p>
    </motion.div>
  )
}
