FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm

# Install global packages
RUN npm install -g pnpm@latest turbo@latest

# Create necessary directories for turbo
RUN mkdir -p /tmp/turbod && chmod 777 /tmp/turbod

WORKDIR /workspace

# Copy package manager files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json .npmrc ./

# Copy all package.json files
COPY apps/api/package.json ./apps/api/
COPY apps/web/package.json ./apps/web/
COPY packages/eslint-config/package.json ./packages/eslint-config/
COPY packages/typescript-config/package.json ./packages/typescript-config/
COPY packages/db/package.json ./packages/db/
COPY packages/ui/package.json ./packages/ui/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Ensure node user owns everything
RUN chown -R node:node /workspace /tmp/turbod

# Switch to node user
USER node