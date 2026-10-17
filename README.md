# Campus Online Stall

A React + TypeScript + Vite frontend prototype for browsing campus food stalls and placing food orders.

## Run locally

Requirements: Node.js 22 and pnpm 9.

```bash
pnpm install
pnpm dev
```

Vite prints the local development URL in the terminal.

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`. After you push the project to a GitHub repository whose default branch is `main`:

1. Open the repository on GitHub and go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open the **Actions** tab and watch the **Deploy Campus Online Stall to GitHub Pages** workflow. After it succeeds, the deployment job displays the published URL.

Every push to `main` will rebuild and redeploy the website. The Vite configuration automatically handles standard GitHub Pages project-repository paths.

## Important scope note

This is a frontend prototype. GitHub Pages can host the static website, but it does not provide a database, authentication server, order-management API, or payment processing. Real orders and payments will need a backend or appropriate hosted services before this can be used as a production ordering system.
