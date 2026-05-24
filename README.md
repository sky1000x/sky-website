# skyler1000x.com — 1000x Growth Systems

Production site for **1000x Growth Systems**, a personal and professional development experience built on five pillars: Identity, Mindset, Systems, Strategy, and Execution.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/) icons

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy \`.env.example\` to \`.env.local\` and fill in the values:

| Variable | Purpose |
| --- | --- |
| \`GOOGLE_SHEET_ID\` | Google Sheets spreadsheet ID for the email capture form |
| \`GOOGLE_SERVICE_ACCOUNT_EMAIL\` | Google Cloud service account email with Sheets API access |
| \`GOOGLE_PRIVATE_KEY\` | Service account private key (PEM format) |

### Setting up the lead capture form

1. Create a Google Cloud project and enable the Google Sheets API.
2. Create a service account and download the JSON key file.
3. Create a Google Sheet with columns: **Email**, **Timestamp**.
4. Share the sheet with the service account email (Editor access).
5. Copy the spreadsheet ID from the URL and set it as \`GOOGLE_SHEET_ID\`.

## Deploy

This repo auto-deploys to [Vercel](https://vercel.com) on every push to \`main\`. Set the environment variables in the Vercel dashboard under Settings > Environment Variables.

## Brand

Earth-tone minimal design system. See the 1000x Growth Systems Brand Guide for full reference.

- **Colors:** Warm Ivory, Bone White, Sandstone, Clay Taupe, Earth Brown, Charcoal Olive, Deep Espresso, Soft Sage
- **Fonts:** Cormorant Garamond (display) + Inter (body)
- **Mood:** Grounded, confident, clear, premium
