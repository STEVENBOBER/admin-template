# Admin-template:
This repository hosts a Full Stack E-Commerce Admin template that can be connected to and manage multiple Frontend stores, built with Next.js 13 App Router, React, Tailwind, PlanetScale, Prisma, shadcn UI and MySQL. It can be utilized as a great base for numerous freelance projects regarding e-commerce.

# Prerequisites
`Node version 14.x`

# Cloning the repo
```bash
git clone https://github.com/STEVENBOBER/admin-template.git
```

# Installing packages
```bash
npm i
```

# Setup .env
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

This was inserted by `prisma init`:
Environment variables declared in this file are automatically made available to Prisma.
See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=""
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```

# Connect to PlanetScale and Push Prisma
```bash
npx prisma generate
npx prisma db push
```
# Start the app
```bash
npm run dev
```
