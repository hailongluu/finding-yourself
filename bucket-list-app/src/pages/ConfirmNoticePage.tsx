import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'

export function ConfirmNoticePage() {
  const location = useLocation()
  const email = (location.state as { email?: string } | null)?.email ?? ''
  const { resendConfirmation } = useAuth()
  const [resent, setResent] = useState(false)

  async function handleResend() {
    if (!email) return
    await resendConfirmation(email)
    setResent(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto flex min-h-screen max-w-sm flex-col items-center justify-center px-6 text-center"
    >
      <span className="mb-4 text-4xl">📬</span>
      <h1 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-50">
        Kiểm tra email của bạn
      </h1>
      <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        Chúng tôi đã gửi link xác nhận tới{' '}
        {email ? <span className="font-medium text-neutral-700 dark:text-neutral-300">{email}</span> : 'email bạn vừa đăng ký'}
        . Bấm vào link trong email để kích hoạt tài khoản.
      </p>
      {email && (
        <button
          onClick={handleResend}
          className="mb-4 text-sm text-neutral-500 underline dark:text-neutral-400"
        >
          {resent ? 'Đã gửi lại email' : 'Không nhận được email? Gửi lại'}
        </button>
      )}
      <Link to="/login" className="text-sm font-medium text-neutral-900 underline dark:text-neutral-100">
        Quay lại đăng nhập
      </Link>
    </motion.div>
  )
}
