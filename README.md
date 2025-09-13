# Family Budget - Frontend (Vue 3 + Vite)

**Stack:** Vue 3, Vite, Pinia, Vue Router. Deploy on **Cloudflare Pages** (free).

## Local Dev
```bash
cd frontend-family-budget
npm install
cp .env.example .env   # set VITE_API_URL
npm run dev            # http://localhost:5173
```

## Deploy on Cloudflare Pages
1) Push to GitHub
2) Pages → Create project → Connect repo
3) Framework: **Vite**
   - Build: `npm run build`
   - Output: `dist`
4) Env var: `VITE_API_URL=https://<your-api>.onrender.com`
