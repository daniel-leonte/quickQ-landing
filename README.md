# QuickQ Landing Page

A modern landing page for QuickQ, an AI-powered startup interview preparation platform. Built with Next.js 15 and TypeScript.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern React component library
- **Radix UI** - Accessible UI primitives

## Features

- Responsive landing page design
- Email waitlist signup functionality
- Form validation and error handling
- Success states with visual feedback
- API integration with GetWaitlist service
- Dark theme with custom styling

## Getting Started

```bash
# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/                 # Next.js App Router pages
│   ├── api/waitlist/   # API endpoint for waitlist signup
│   ├── page.tsx        # Landing page component
│   └── layout.tsx      # Root layout
├── components/         # Reusable React components
│   └── ui/            # shadcn/ui components
├── lib/               # Utility functions
└── public/            # Static assets
```

## API

- `POST /api/waitlist` - Submit email to waitlist with optional feedback

---

Built with modern web technologies for optimal performance and user experience.