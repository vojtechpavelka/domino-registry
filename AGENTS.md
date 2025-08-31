# Repository Guidelines

## Project Structure & Module Organization

- `app/`: Next.js App Router pages (`page.tsx`, `layout.tsx`) and global styles (`globals.css`).
- `components/`: Reusable UI (e.g., `open-in-v0-button.tsx`).
- `hooks/` and `lib/`: Custom hooks (e.g., `use-mobile.ts`) and utilities (`utils.ts`).
- `registry/` + `registry.json`: Source of the Domino component registry; defines items, dependencies, and file targets.
- `public/r/*.json`: Built registry items served statically (consumed by the `shadcn` CLI and v0).

## Build, Test, and Development Commands

- `npm run dev`: Start the Next.js dev server with Turbopack.
- `npm run build`: Production build of the app.
- `npm run start`: Run the production server.
- `npm run lint`: Lint using Next.js/ESLint config.
- `npm run registry:build`: Build registry JSON from `registry/` and `registry.json` into `public/r/`.

## Coding Style & Naming Conventions

- Language: TypeScript + React (Next.js 15+, App Router). Tailwind v4.1+ for styling.
- Linting: ESLint via `eslint.config.mjs` (`npm run lint` must pass before PR).
- Indentation: 2 spaces; format consistently (align imports, props).
- Filenames: kebab-case for files (`hello-world.tsx`), PascalCase for React components, hooks start with `use-`.
- Imports: use path alias `@/*` from `tsconfig.json`.

## Testing Guidelines

- There is no test framework configured yet. If adding tests, prefer Vitest/Jest + React Testing Library.
- Co-locate tests next to sources as `*.test.ts(x)` and keep them fast, deterministic, and isolated.
- For registry changes, validate generated `public/r/[name].json` and render locally in `app/`.

## Commit & Pull Request Guidelines

- Commits: Imperative, concise, and scoped (e.g., "Refactor theme paths", "Add login form block").
- PRs: Include summary, rationale, and impact. Link issues. Add screenshots/GIFs for UI changes and the names of affected registry items.
- Pre-submit: `npm run lint && npm run build && npm run registry:build` should succeed.

## Security & Configuration

- Set `NEXT_PUBLIC_BASE_URL` (used by `OpenInV0Button`) in `.env.local` for correct v0 links.
- Do not commit secrets. Prefer environment variables and keep `public/r/` outputs reproducible via the registry build.
