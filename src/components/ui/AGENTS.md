# UI Components - Patterns and Conventions

## Overview

This folder contains reusable UI components used throughout the TecGenn application.

## Component Patterns

### 1. Typing

- Always use TypeScript with explicit props interfaces
- Extend native HTML types when applicable (e.g., `React.ButtonHTMLAttributes<HTMLButtonElement>`)
- Use `React.FC<Props>` for functional components

### 2. Naming

- PascalCase for file and component names: `Button.tsx`, `SectionHeader.tsx`
- Descriptive suffix: `Button`, `Card`, `Modal`, `FaqItem`
- Props interface: `{ComponentName}Props`

### 3. File Structure

```tsx
import React from 'react';

interface {ComponentName}Props {
  // props here
}

const {ComponentName}: React.FC<{ComponentName}Props> = ({ prop1, prop2 }) => {
  return (...);
};

export default {ComponentName};
```

### 4. Variants and Styles

- Use mapping objects for variants: `const variantClasses: Record<string, string> = {...}`
- Project color palette:
  - Background: `#0A0A1A`
  - Cyan: `#33D1FF` (400), `#06B6D4` (500)
  - Blue: `#3B82F6` (500), `#2563EB` (600)
  - Text gradient: `linear-gradient(90deg, #33D1FF, #007CF0)`
- Cards: `bg-gray-900/50 border border-cyan-500/20 rounded-xl`

### 5. Tailwind Classes

- Use template literals for conditional classes
- Keep base classes separate from variants
- `hover:` prefix for hover states
- `transition-all duration-300` for smooth animations

### 6. Accessibility

- Buttons always with explicit `type="button"`
- Links with valid `href` (avoid `href="#"`)
- Roles and aria attributes when needed
- `aria-label` for buttons without visible text

### 7. Exports

- Default export for the main component
- Named exports for types/interfaces if needed
- Index barrel export in `index.ts`

## Available Components

| Component | Usage | Main Props |
|-----------|-------|------------|
| `Button` | CTAs, actions | `variant`, `size`, `as`, `href` |
| `Card` | Content containers | `hover`, `glow` |
| `Badge` | Labels, tags | `variant` |
| `SectionHeader` | Section titles | `title`, `description` |
| `Modal` | Dialogs, overlays | `isOpen`, `onClose`, `title` |
| `FaqItem` | FAQ items | `question`, `answer` |

## When Creating a New Component

1. Follow the standard file structure
2. Define props interface explicitly
3. Use existing colors and patterns
4. Add to `index.ts` barrel export
5. Document in the table above
6. Run `pnpm run lint` to validate
