// Vercel 빌드 시 환경변수를 읽어 정적 config.js를 생성한다.
const fs = require("fs");
const { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } = process.env;
if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  console.error("SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY are required");
  process.exit(1);
}
fs.rmSync("dist", { recursive: true, force: true });
fs.mkdirSync("dist");
fs.copyFileSync("index.html", "dist/index.html");
fs.writeFileSync(
  "dist/config.js",
  `export const SUPABASE_URL = ${JSON.stringify(SUPABASE_URL)};\nexport const SUPABASE_KEY = ${JSON.stringify(SUPABASE_PUBLISHABLE_KEY)};\n`
);
