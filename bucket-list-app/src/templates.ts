export const TEMPLATES = [
  { id: 'scrapbook', name: 'Scrapbook', note: 'Ấm áp, thủ công và đầy kỷ niệm', glyph: '✿' },
  { id: 'travel', name: 'Travel Journal', note: 'Một cuốn nhật ký cho các hành trình', glyph: '✈' },
  { id: 'editorial', name: 'Minimal Editorial', note: 'Tĩnh, sang và tập trung vào nội dung', glyph: 'B' },
] as const

export type TemplateId = (typeof TEMPLATES)[number]['id']
