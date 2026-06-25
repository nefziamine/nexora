# Nexora Technologies — Backend API

Spring Boot REST API for contact and quote request handling.

## Tech Stack

- Java 21
- Spring Boot 3.4
- Spring Data JPA
- PostgreSQL 16
- Maven

## Prerequisites

- Java 21+
- Maven 3.9+
- Docker (for PostgreSQL)

## Quick Start

### 1. Start PostgreSQL

```bash
docker compose up -d
```

### 2. Run the API

```bash
mvn spring-boot:run
```

API runs at `http://localhost:8080`

### 3. Health Check

```bash
curl http://localhost:8080/api/health
```

## API Endpoints

| Method | Endpoint        | Description              |
|--------|-----------------|--------------------------|
| GET    | `/api/health`   | Health check             |
| POST   | `/api/contact`  | Submit contact message   |
| POST   | `/api/quotes`   | Submit quote request     |

## Configuration

Edit `src/main/resources/application.yml`:

- Database connection
- CORS allowed origins (default: `http://localhost:3000`)

## Database

Tables are auto-created via JPA `ddl-auto: update`:

- `contact_messages` — Contact form submissions
- `quote_requests` — Quote request submissions
