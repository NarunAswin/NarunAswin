# Task 01: Fix Image Import and Typo in app/page.tsx

## Status

pending

## Batch

1

## Description

Restore the missing `next/image` import and repair the `<Imag` typo in `app/page.tsx`. This resolves the TypeScript `TS2786` / `TS2552` errors and ESLint `react/jsx-no-undef` violations.

## Dependencies

**Depends on:** None (Batch 1)
**Blocks:** None

**Context from dependencies:** None (Batch 1 task).

## Files to Create

None

## Files to Modify

- `app/page.tsx` — Add missing import on line 1 and fix `<Imag` typo on line 48.

## Technical Details

### Implementation Steps

1. Open `app/page.tsx`.
2. Add `import Image from "next/image";` at the very top of the file (line 1).
3. Navigate to line 48 and replace `<Imag` with `<Image`.
4. Run `npx tsc --noEmit` and `npm run lint` to verify that both exit with 0 errors.

### Code Snippets

Line 1 change in `app/page.tsx`:
```tsx
import Image from "next/image";
```

Line 48 change in `app/page.tsx`:
```tsx
<Image
  className="dark:invert h-[14px] w-4"
  src="/vercel.svg"
  alt="Vercel logomark"
  width={16}
  height={14}
/>
```

## Tests

- `npx tsc --noEmit` — verifies TypeScript compilation without missing JSX definitions or type mismatch.
- `npm run lint` — verifies ESLint rules (`react/jsx-no-undef`) pass with 0 errors.

## Acceptance Criteria

- [ ] Line 1 of `app/page.tsx` contains `import Image from "next/image";`.
- [ ] Line 48 of `app/page.tsx` contains `<Image`.
- [ ] `npx tsc --noEmit` exits with 0 errors.
- [ ] `npm run lint` exits with 0 errors.

