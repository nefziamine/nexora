# Nexora

Monorepo for **Nexora Technologies** — software agency website.

| Folder | Stack |
|--------|-------|
| `nexora-technologies/` | Next.js 16 frontend |
| `nexora-backend/` | Spring Boot + PostgreSQL API |

## Local development

```bash
npm install
npm run dev
```

Frontend: [http://localhost:3000](http://localhost:3000)

## Deploy on Vercel

Vercel must use the **Next.js app folder**, not the repo root.

1. Open [Vercel Dashboard](https://vercel.com/dashboard) → your **nexora** project
2. Go to **Settings** → **General**
3. Set **Root Directory** to `nexora-technologies`
4. Click **Save**
5. Go to **Deployments** → **Redeploy** (latest deployment)

Vercel will then detect Next.js from `nexora-technologies/package.json` and deploy correctly.

### Environment variables (optional)

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_API_URL` | Your Spring Boot API URL (e.g. production backend URL) |

## Backend

See [nexora-backend/README.md](nexora-backend/README.md).
