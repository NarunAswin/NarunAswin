# Task 02: Update Root Layout and Shop Metadata

## Status

complete

## Batch

1

## Description

Update `app/layout.tsx` to establish the sweets shop branding, metadata, and HTML container styling. This updates the page title to "Sweet Delights — Handcrafted Sweets & Confections", adds descriptive metadata, and configures smooth scrolling and warm background base styles in the root layout shell.

## Dependencies

**Depends on:** None (Batch 1)
**Blocks:** task-06-assemble-sweets-page.md

**Context from dependencies:** None (Batch 1 task).

## Files to Create

None

## Files to Modify

- `app/layout.tsx` — Update metadata title, description, keywords, OpenGraph information, and root container classes.

## Technical Details

### Implementation Steps

1. Open `app/layout.tsx`.
2. Update the `metadata` object:
   - `title`: `"Sweet Delights | Handcrafted Artisanal Sweets & Gift Boxes"`
   - `description`: `"Experience authentic handcrafted sweets made daily with 100% pure desi ghee, organic dry fruits, and traditional recipes. Order fresh online with express delivery."`
   - `keywords`: `["sweets", "mithai", "kaju katli", "gulab jamun", "desi ghee sweets", "festive gift boxes", "Indian sweets", "confectionery"]`
3. Update `<html>` tag to enable `scroll-smooth`.
4. Ensure the body tag has appropriate baseline styling (`bg-[#FFFDF9] text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 antialiased min-h-screen flex flex-col`).

### Code Snippets

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sweet Delights | Handcrafted Artisanal Sweets & Gift Boxes",
  description:
    "Experience authentic handcrafted sweets made daily with 100% pure desi ghee, organic dry fruits, and traditional recipes. Order fresh online with express delivery.",
  keywords: [
    "sweets",
    "mithai",
    "kaju katli",
    "gulab jamun",
    "desi ghee sweets",
    "festive gift boxes",
    "Indian sweets",
    "confectionery",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFDF9] text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-amber-200 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
```

## Tests

- `npx tsc --noEmit` — verifies valid TypeScript types and metadata interface compliance.
- `npm run lint` — verifies that ESLint passes cleanly.

## Acceptance Criteria

- [ ] `metadata.title` displays `"Sweet Delights | Handcrafted Artisanal Sweets & Gift Boxes"`.
- [ ] `metadata.description` contains the sweets shop description.
- [ ] `html` element includes `scroll-smooth`.
- [ ] `npx tsc --noEmit` passes with 0 errors.
- [ ] `npm run lint` passes with 0 errors.

