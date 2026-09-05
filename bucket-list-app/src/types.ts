export const CATEGORIES = [
  'Du lịch',
  'Sự nghiệp',
  'Sức khoẻ',
  'Học tập',
  'Gia đình',
  'Khác',
] as const

export type Category = (typeof CATEGORIES)[number]

export interface BucketItem {
  id: string
  user_id: string
  title: string
  category: string
  is_done: boolean
  created_at: string
}
