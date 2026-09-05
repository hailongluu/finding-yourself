import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import type { BucketItem } from '../types'
import { useAuth } from '../contexts/AuthContext'

export function useBucketList() {
  const { session } = useAuth()
  const userId = session?.user.id
  const [items, setItems] = useState<BucketItem[]>([])
  const [loading, setLoading] = useState(true)

  const refresh = useCallback(async () => {
    if (!userId) {
      setItems([])
      setLoading(false)
      return
    }
    setLoading(true)
    const { data, error } = await supabase
      .from('bucket_items')
      .select('*')
      .order('created_at', { ascending: false })
    if (!error && data) setItems(data as BucketItem[])
    setLoading(false)
  }, [userId])

  useEffect(() => {
    refresh()
  }, [refresh])

  async function addItem(title: string, category: string) {
    if (!userId) return
    const { data, error } = await supabase
      .from('bucket_items')
      .insert({ title, category, user_id: userId })
      .select()
      .single()
    if (!error && data) setItems((prev) => [data as BucketItem, ...prev])
  }

  async function toggleItem(id: string, isDone: boolean) {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, is_done: isDone } : item)),
    )
    await supabase.from('bucket_items').update({ is_done: isDone }).eq('id', id)
  }

  async function removeItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id))
    await supabase.from('bucket_items').delete().eq('id', id)
  }

  async function editItem(id: string, title: string, category: string) {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title, category } : item)),
    )
    await supabase.from('bucket_items').update({ title, category }).eq('id', id)
  }

  return { items, loading, addItem, toggleItem, removeItem, editItem }
}
