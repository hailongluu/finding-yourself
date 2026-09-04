export const TEMPLATES = [
  { id: 'paper', name: 'Sổ tay', note: 'Giấy kem và nét mực', glyph: '✎' },
  { id: 'postcard', name: 'Bưu thiếp', note: 'Ký ức từ những chuyến đi', glyph: '✈' },
  { id: 'scrapbook', name: 'Scrapbook', note: 'Ảnh, băng dính và ghi chú', glyph: '✿' },
  { id: 'illustrated', name: 'Minh hoạ', note: 'Tươi vui như poster vẽ tay', glyph: '☀' },
  { id: 'polaroid', name: 'Polaroid', note: 'Mỗi ước mơ là một khoảnh khắc', glyph: '▣' },
  { id: 'seasonal', name: 'Bốn mùa', note: 'Mục tiêu theo nhịp thời gian', glyph: '❋' },
  { id: 'editorial', name: 'Tạp chí', note: 'Thanh lịch và giàu khoảng thở', glyph: 'B' },
  { id: 'minimal', name: 'Tối giản', note: 'Rõ ràng, tập trung, yên tĩnh', glyph: '—' },
  { id: 'night', name: 'Bầu trời đêm', note: 'Cho những giấc mơ thật lớn', glyph: '✦' },
  { id: 'adventure', name: 'Nhà thám hiểm', note: 'Mạnh mẽ như một hành trình', glyph: '⌁' },
] as const

export type TemplateId = (typeof TEMPLATES)[number]['id']

