ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# The shop host is part of the build: next/image only optimises images from these hosts and
# NEXT_PUBLIC_* values are inlined into the client bundle. The GraphQL endpoint (API_URL, with
# the API key) and the Auth.js secret are runtime environment variables, see README.
ARG API_HOSTNAME=enterprise.coreshop.dev
ENV API_HOSTNAME=$API_HOSTNAME
ARG NEXT_PUBLIC_PIMCORE_BASE_URL=https://enterprise.coreshop.dev
ENV NEXT_PUBLIC_PIMCORE_BASE_URL=$NEXT_PUBLIC_PIMCORE_BASE_URL
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
