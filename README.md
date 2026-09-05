# CoreShop Enterprise Demo – Next.js storefront

Headless storefront for the [CoreShop enterprise demo](https://github.com/coreshop/demo-enterprise),
built with Next.js (App Router, server actions), Auth.js and Bootstrap. It talks to CoreShop through
the GraphQL API of the [CoreShop headless bundle](https://github.com/coreshop/headless-bundle). The
component library is documented in Storybook.

- Storefront: https://headless.coreshop.dev
- Storybook: https://storybook.coreshop.dev
- Shop backend: https://enterprise.coreshop.dev

## Environment

| Variable | Used | Description |
|---|---|---|
| `API_URL` | runtime (server) | GraphQL endpoint including the API key, `https://<shop>/pimcore-graphql-webservices/coreshop?apikey=…` |
| `AUTH_SECRET` | runtime | Auth.js secret (`openssl rand -base64 32`) |
| `AUTH_TRUST_HOST` | runtime | `true` behind a reverse proxy |
| `API_HOSTNAME` | build | shop host, allowed as `next/image` remote host |
| `NEXT_PUBLIC_PIMCORE_BASE_URL` | build | public base URL of the shop, prefixed to Pimcore asset paths |
| `CODEGEN_SCHEMA_URL` | codegen | GraphQL endpoint for `npm run codegen`, usually the same as `API_URL` |

The API key never ends up in the image: it is read from `API_URL` at runtime and the image is
built without it.

## Local development

```bash
cp .env.example .env.local   # fill in the values
npm ci
NODE_TLS_REJECT_UNAUTHORIZED=0 npm run dev   # self-signed certificate of the local shop
```

Open http://localhost:3000.

### GraphQL codegen

Regenerates `lib/graphql/types.generated.ts` from the documents in `lib/graphql/query` against a
running CoreShop installation:

```bash
NODE_TLS_REJECT_UNAUTHORIZED=0 npm run codegen
```

### Storybook

```bash
npm run storybook          # http://localhost:6006
npm run build-storybook    # static build in storybook-static/
```

## Docker

```bash
docker build -t demo-enterprise-nextjs/app .
docker build -t demo-enterprise-nextjs/storybook -f Dockerfile-storybook .
docker run --rm -p 3000:3000 -e API_URL=… -e AUTH_SECRET=… -e AUTH_TRUST_HOST=true demo-enterprise-nextjs/app
```

`API_HOSTNAME` and `NEXT_PUBLIC_PIMCORE_BASE_URL` are build arguments and default to the public
enterprise demo.

## CI

- `build.yml`: builds both images on every push and PR; on `main` pushes them to
  `ghcr.io/coreshop/demo-enterprise-nextjs/app` and `…/storybook` (tag `main-<sha>`) and bumps
  `headless_nextjs.image.tag` / `storybook.image.tag` in the enterprise demo manifest via the
  coreshop GitHub App. The shop host comes from the repository variable `SHOP_HOST`
  (default `enterprise.coreshop.dev`).
- `static.yml`: lint, build, typecheck and Storybook build on PRs.
- `npm-update.yml`: weekly `npm update` as a pull request.
