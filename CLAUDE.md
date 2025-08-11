# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` or `pnpm dev`
- **Build**: `npm run build` 
- **Production server**: `npm run start`
- **Linting**: `npm run lint`

## Project Architecture

This is a **Next.js 15** landing page application for QuickQ, a YC AI startup interview preparation platform. The project uses:

### Core Framework & Languages
- **Next.js 15** with App Router
- **TypeScript** (strict mode enabled)
- **React 19** with Server Components

### Styling & UI
- **Tailwind CSS** with custom theme configuration
- **shadcn/ui** component library (configured in `components.json`)
- **Radix UI** primitives for accessible components
- **Lucide React** for icons
- Custom CSS variables for theming (dark theme support)

### Key Directories Structure
- `app/` - Next.js App Router pages and API routes
  - `page.tsx` - Main landing page component (`QuickQLanding`)
  - `layout.tsx` - Root layout with metadata
  - `api/waitlist/route.ts` - Waitlist signup API endpoint
- `components/` - Reusable React components
  - `ui/` - shadcn/ui components (auto-generated, don't edit manually)
  - `theme-provider.tsx` - Theme context provider
- `lib/` - Utility functions
  - `utils.ts` - Common utilities (includes `cn` function for class merging)
- `hooks/` - Custom React hooks
- `public/` - Static assets (contains mockup images: mock1-4.png)

### Core Functionality
The application is a **single-page landing page** with:
- **Waitlist signup form** (integrates with GetWaitlist API)
- **Email validation** (client & server-side)
- **Multiple form submissions** (hero section + footer CTA)
- **Success state management** with visual feedback
- **Responsive design** optimized for mobile and desktop

### API Integration
- **Waitlist API**: `/api/waitlist` endpoint handles email signups
- **External service**: GetWaitlist.com (waitlist_id: 29604)
- **Form validation**: Email regex validation + TypeScript types
- **Error handling**: Proper HTTP status codes and error responses

### Configuration Details
- **Build optimizations**: ESLint and TypeScript errors ignored during builds (`next.config.mjs`)
- **Image optimization**: Disabled (likely for static export)
- **Path aliases**: `@/*` maps to project root for imports
- **Package manager**: Uses pnpm (lockfile present)

### Styling Approach
- **Dark theme focused**: Primary colors use zinc-950 background
- **Accent color**: Lime green (#A3E635) throughout the UI  
- **CSS-in-JS**: Tailwind utility classes with custom CSS variables
- **Component consistency**: All UI components use shadcn/ui patterns

## Development Notes

### When Adding Components
- Use existing shadcn/ui components from `components/ui/`
- Follow the established dark theme with lime green accents
- Import icons from `lucide-react`
- Use the `cn()` utility from `@/lib/utils` for conditional classes

### When Modifying Forms
- Both hero and footer forms use the same submission logic
- State is managed in the main `QuickQLanding` component
- Success states include visual feedback and auto-reset after 3 seconds
- Email validation happens both client and server-side

### API Development
- API routes follow Next.js 13+ conventions in `app/api/`
- Use `NextRequest` and `NextResponse` for proper typing
- Include proper error handling and logging
- The waitlist endpoint integrates with GetWaitlist.com service