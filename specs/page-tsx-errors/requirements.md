# Requirements: Fix app/page.tsx Syntax and Import Errors

## Summary

`app/page.tsx` currently fails both TypeScript compilation and ESLint verification due to two regressions:
1. The import statement `import Image from "next/image";` is missing from line 1, causing TypeScript to resolve `<Image>` to the DOM `window.Image` class constructor (`HTMLImageElement`), which is not a valid React JSX element.
2. Line 48 contains a typographical error `<Imag` instead of `<Image`.

This feature restores the correct import statement and fixes the typo, ensuring that `app/page.tsx` passes TypeScript compilation (`npx tsc --noEmit`) and ESLint (`npm run lint`) cleanly.

## Goals

- Restore `import Image from "next/image";` on line 1 of `app/page.tsx`.
- Fix typo `<Imag` to `<Image` on line 48 of `app/page.tsx`.
- Ensure `npx tsc --noEmit` succeeds with exit code 0.
- Ensure `npm run lint` succeeds with exit code 0.

## Non-Goals

- Redesigning the home page layout or replacing content.
- Adding third-party packages or changing project configurations.

## Acceptance Criteria

- [ ] Line 1 of `app/page.tsx` imports `Image` from `"next/image"`.
- [ ] Line 48 of `app/page.tsx` uses `<Image ... />`.
- [ ] `npx tsc --noEmit` passes with 0 errors.
- [ ] `npm run lint` passes with 0 errors.

## Assumptions

- Next.js and React dependencies are installed in `node_modules`.

## Technical Constraints

- Do not modify any other files.
- Preserve all existing props on the `<Image>` components (`className`, `src`, `alt`, `width`, `height`, `priority`).

