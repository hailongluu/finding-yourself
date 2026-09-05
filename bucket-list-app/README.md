# My Bucket List

Web app ghi lại những điều bạn muốn làm trong đời — thêm, đánh dấu hoàn thành, xoá, lọc theo trạng thái. Xây bằng Vite + React + TypeScript + Tailwind v4, backend/auth dùng Supabase, email xác nhận gửi qua Brevo, deploy trên Cloudflare Worker (custom domain `bucket.luuhailong.com`).

## Stack
- **Frontend**: React 19 + TypeScript + Tailwind CSS v4 + framer-motion (animation), react-router-dom.
- **Backend/DB/Auth**: Supabase (Postgres + Row Level Security + Supabase Auth email/password).
- **Email**: Supabase Auth SMTP trỏ qua Brevo SMTP relay, sender `long@luuhailong.com`.
- **Hosting**: Cloudflare Worker (Static Assets) tại `bucket.luuhailong.com`.

## Luồng đăng ký / xác nhận tài khoản
1. User đăng ký email + password ở `/signup`.
2. App gọi `supabase.auth.signUp` → chuyển sang `/confirm-notice`: "Kiểm tra email của bạn" (có nút gửi lại email).
3. Supabase gửi email xác nhận qua Brevo (sender `long@luuhailong.com`).
4. User bấm link trong email → mở `/auth/callback`, app đổi code lấy session.
5. Hiện màn hình "🎉 Chúc mừng, tài khoản đã được xác nhận!" ~1.8s rồi tự động chuyển vào trang chính, **đã đăng nhập sẵn** — không cần đăng nhập lại thủ công.

## Chạy local
```bash
npm install
cp .env.example .env   # đã điền sẵn URL/anon key của project bucket-list
npm run dev
```

## Build & deploy
```bash
npm run build
npx wrangler login        # cần đăng nhập Cloudflare 1 lần (chưa thực hiện được trong môi trường agent)
npx wrangler deploy
```

`wrangler.jsonc` đã cấu hình sẵn:
- Static assets từ `dist/` (SPA routing).
- Route `bucket.luuhailong.com/*` trỏ vào zone `luuhailong.com` (zone đã có sẵn trên Cloudflare account).

## Việc cần làm thủ công (ngoài khả năng của agent)
1. **Cấu hình SMTP Brevo cho Supabase Auth** (Supabase Dashboard → Project `bucket-list` → Authentication → Emails → SMTP Settings):
   - Host: `smtp-relay.brevo.com`, Port: `587`
   - Sender email: `long@luuhailong.com`
   - Username/Password: lấy trong Brevo → SMTP & API → SMTP keys
   - Không có API cho thao tác này nên phải nhập tay trên dashboard.
2. **`wrangler login`** để lấy quyền deploy lên Cloudflare account (agent hiện chưa được xác thực Cloudflare CLI). Sau khi login, chạy `npx wrangler deploy` để publish và tự động gắn route `bucket.luuhailong.com`.

## Supabase project
- Project: `bucket-list` (`pmvrpmistjalkgvuhmxt`, region `ap-northeast-1`).
- Bảng `bucket_items` có RLS: mỗi user chỉ thấy/sửa được item của chính mình.
