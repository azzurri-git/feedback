# CLASS FEEDBACK

수업 만족도 조사 웹앱 (HTML/CSS/JS + Supabase).

- Vercel 환경변수: `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY` (빌드 시 `config.js` 생성)
- 관리자 계정은 Supabase Dashboard → Authentication → Users에서 직접 생성
- DB: `votes` 테이블 + RLS (anon은 INSERT만, authenticated는 SELECT/INSERT/DELETE)
