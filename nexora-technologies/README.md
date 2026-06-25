# Nexora Technologies

Enterprise-grade software agency website built with Next.js 15 App Router, TypeScript, Tailwind CSS, Shadcn/UI, and Framer Motion.

**Slogan:** Turning Ideas Into Digital Reality

## Tech Stack

| Layer    | Technology                          |
|----------|-------------------------------------|
| Frontend | Next.js 15, TypeScript, Tailwind CSS v4 |
| UI       | Shadcn/UI, Radix UI, Framer Motion  |
| Backend  | Spring Boot 3.4, Java 21            |
| Database | PostgreSQL 16                       |

## Project Structure

```
nexora-technologies/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (theme, header, footer)
│   ├── page.tsx            # Home
│   ├── about/
│   ├── services/
│   ├── portfolio/
│   ├── contact/
│   └── request-quote/
├── components/
│   ├── ui/                 # Shadcn UI primitives
│   ├── layout/             # Header, Footer, ThemeToggle
│   └── shared/             # Container, Section, FadeIn, etc.
├── features/               # Feature-based modules
│   ├── home/components/
│   ├── about/components/
│   ├── services/components/
│   ├── portfolio/components/
│   ├── contact/components/
│   └── quote/components/
├── data/                   # Static content & sample data
├── lib/                    # Utils, API client, constants
├── providers/              # Theme provider
└── types/                  # TypeScript interfaces

nexora-backend/
├── src/main/java/com/nexora/
│   ├── config/             # CORS configuration
│   ├── controller/         # REST endpoints
│   ├── dto/                # Request/response DTOs
│   ├── entity/             # JPA entities
│   ├── repository/         # Data access
│   ├── service/            # Business logic
│   └── exception/          # Global error handling
└── docker-compose.yml      # PostgreSQL
```

## Getting Started

### Frontend

```bash
cd nexora-technologies
npm install
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Backend

```bash
cd nexora-backend
docker compose up -d
mvn spring-boot:run
```

API at [http://localhost:8080/api/health](http://localhost:8080/api/health)

## Pages

| Route            | Description                    |
|------------------|--------------------------------|
| `/`              | Home with all sections         |
| `/about`         | Company story & team           |
| `/services`      | Full services catalog          |
| `/portfolio`     | Case studies & projects        |
| `/contact`       | Contact form                   |
| `/request-quote` | Quote request form             |

## Theme

Brand colors derived from the Nexora logo:

- Cyan: `#00AEEF`
- Blue: `#2E3192`
- Purple: `#662D91`

Dark/light mode via `next-themes`.

## License

Private — Nexora Technologies
