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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
