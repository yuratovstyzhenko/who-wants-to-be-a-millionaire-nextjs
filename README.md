# Who Wants To Be A Millionaire (Next.js)

A clone of the “Who Wants to Be a Millionaire?” game implemented with Next.js.

## Stack

- **Next.js**
- **React**
- **TypeScript**
- **ESLint**
- **husky**

## Linting

Code fully complies with the rules of:

- `eslint-config-next` (`next/core-web-vitals`)
- `eslint-config-airbnb`
- `eslint-config-airbnb-typescript`

No rules have been disabled or relaxed.  
Linting is executed:

- manually: `yarn lint`
- automatically:
- before commit: `pre-commit` -> `lint-staged`
- before push: `pre-push` -> `test`

## Getting Started

```bash
yarn install
yarn dev
```

## Live demo

Deployed on Vercel:  
https://who-wants-to-be-a-millionaire-nextjs-jpnhz01sw.vercel.app/
