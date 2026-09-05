import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { supabase } from '../lib/supabaseClient'

type Status = 'checking' | 'success' | 'error'

export function AuthCallbackPage() {
  const navigate = useNavigate()
  const [status, setStatus] = useState<Status>('checking')

  useEffect(() => {
    let cancelled = false

    async function resolveSession() {
      // PKCE flow: link contains ?code=...
      const url = new URL(window.location.href)
      const code = url.searchParams.get('code')

      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (!cancelled) setStatus(error ? 'error' : 'success')
        return
      }

      // Implicit/OTP flow: supabase-js already parsed the hash into a session
      // (detectSessionInUrl is on by default) — just confirm we have one.
      const { data } = await supabase.auth.getSession()
      if (!cancelled) setStatus(data.session ? 'success' : 'error')
    }

    resolveSession()
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (status !== 'success') return
    const timer = setTimeout(() => navigate('/', { replace: true }), 1800)
    return () => clearTimeout(timer)
  }, [status, navigate])

  return (
    <div className="mx-auto flex min-h-screen max-w-sm flex-col items-center justify-center px-6 text-center">
      <AnimatePresence mode="wait">
        {status === 'checking' && (
          <motion.div key="checking" exit={{ opacity: 0 }}>
            <div className="mb-4 h-6 w-6 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-900 dark:border-neutral-700 dark:border-t-neutral-100" />
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Đang xác nhận tài khoản...</p>
          </motion.div>
        )}

        {status === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-4 block text-5xl">🎉</span>
            <h1 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Chúc mừng, tài khoản đã được xác nhận!
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Đang đưa bạn vào bucket list...
            </p>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="mb-4 block text-4xl">⚠️</span>
            <h1 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Link xác nhận không hợp lệ hoặc đã hết hạn
            </h1>
            <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
              Vui lòng đăng nhập lại hoặc yêu cầu gửi lại email xác nhận.
            </p>
            <Link to="/login" className="text-sm font-medium text-neutral-900 underline dark:text-neutral-100">
              Quay lại đăng nhập
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
