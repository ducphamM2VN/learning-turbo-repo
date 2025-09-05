# Learning Turbo Repo 🚀

A modern monorepo learning project built with Turborepo, featuring a Vue.js frontend, NestJS backend, and shared packages. This project demonstrates best practices for managing multiple applications and packages in a single repository with efficient build caching and task orchestration.

## ✨ Features

- **Monorepo Architecture:** Powered by `Turborepo` with `pnpm` workspaces for efficient dependency management
- **Frontend Application:** Modern Vue.js 3 application with Vue CLI
- **Backend API:** Robust NestJS TypeScript API with built-in testing
- **Database Integration:** MikroORM with PostgreSQL for type-safe database operations
- **Shared Packages:** Reusable UI components, ESLint configurations, and TypeScript configs
- **Build Optimization:** Turborepo caching for fast builds and task execution
- **Code Quality:** Comprehensive linting and formatting with ESLint and Prettier
- **Type Safety:** Full TypeScript support across all packages

## 🛠️ Tech Stack

### Core Technologies
- **Monorepo:** [Turborepo](https://turbo.build/repo) + [pnpm](https://pnpm.io/)
- **Backend:** [NestJS](https://nestjs.com/) + [TypeScript](https://www.typescriptlang.org/)
- **Database:** [MikroORM](https://mikro-orm.io/) + [PostgreSQL](https://www.postgresql.org/)
- **Frontend:** [Vue.js 3](https://vuejs.org/) + [Vue CLI](https://cli.vuejs.org/)
- **UI Components:** [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)

### Development Tools
- **Package Manager:** pnpm 9.0.0
- **Build System:** Turborepo
- **Code Quality:** ESLint + Prettier
- **Testing:** Jest (NestJS)
- **Type Checking:** TypeScript 5.9.2

## 📂 Project Structure

```
learning-turbo-repo/
├── apps/
│   ├── api/                    # NestJS backend application
│   │   ├── src/
│   │   │   ├── app.controller.ts
│   │   │   ├── app.service.ts
│   │   │   ├── app.module.ts
│   │   │   └── main.ts
│   │   ├── test/               # E2E tests
│   │   └── package.json
│   │
│   └── web/                    # Vue.js frontend application
│       ├── src/
│       │   ├── components/
│       │   ├── App.vue
│       │   └── main.js
│       ├── public/
│       └── package.json
│
├── packages/
│   ├── ui/                     # Shared React UI components
│   │   └── src/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── code.tsx
│   │
│   ├── db/                     # Database entities and configurations
│   │   └── src/
│   │       ├── index.ts
│   │       └── entities/
│   │           └── user.entity.ts    # MikroORM entities
│   │
│   ├── eslint-config/          # Shared ESLint configurations
│   │   ├── base.js
│   │   ├── next.js
│   │   └── react-internal.js
│   │
│   └── typescript-config/      # Shared TypeScript configurations
│       ├── base.json
│       ├── nextjs.json
│       └── react-library.json
│
├── turbo.json                  # Turborepo configuration
├── pnpm-workspace.yaml         # pnpm workspace configuration
└── package.json                # Root package.json
```

## 🚀 Getting Started

### Prerequisites

- **Node.js:** >=18.0.0
- **pnpm:** 9.0.0 (recommended package manager)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ducphamM2VN/learning-turbo-repo.git
   cd learning-turbo-repo
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

## 🏃‍♂️ Development

### Run All Applications

```bash
# Start all applications in development mode
pnpm dev

# Build all applications
pnpm build

# Run linting across all packages
pnpm lint

# Format code across all packages
pnpm format

# Type checking across all packages
pnpm check-types
```

### Run Specific Applications

```bash
# Run only the Vue.js frontend
pnpm --filter web dev

# Run only the NestJS backend
pnpm --filter api start:dev

# Build only the API
pnpm --filter api build

# Lint only the UI package
pnpm --filter @repo/ui lint
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start all apps in development mode |
| `pnpm build` | Build all apps for production |
| `pnpm lint` | Run ESLint across all packages |
| `pnpm format` | Format code with Prettier |
| `pnpm check-types` | Run TypeScript type checking |

## 📦 Packages

### Applications (`apps/`)
- **`api`** - NestJS backend API with TypeScript
- **`web`** - Vue.js 3 frontend application

### Shared Packages (`packages/`)
- **`@repo/ui`** - Shared React UI components
- **`@repo/db`** - Database entities and utilities with MikroORM integration
- **`@repo/eslint-config`** - ESLint configurations for different project types
- **`@repo/typescript-config`** - TypeScript configurations

## 🗄️ Database Integration

This project uses [MikroORM](https://mikro-orm.io/) as the TypeScript ORM for database operations with PostgreSQL:

### Features
- **Type-safe Database Operations:** Full TypeScript support with compile-time type checking
- **Entity Management:** Decorators-based entity definitions
- **Auto Schema Sync:** Automatic database schema synchronization (development only)
- **Migration Support:** Built-in migration system for production deployments
- **Query Builder:** Powerful and intuitive query builder with type safety

### Configuration
The database configuration is centralized in the `@repo/db` package:
- **Entities:** Located in `packages/db/src/entities/`
- **Integration:** NestJS integration via `@mikro-orm/nestjs`
- **Database:** PostgreSQL with connection configuration via environment variables

### Environment Variables
```bash
DB_NAME=your_database_name
DB_USER=your_username
DB_HOST=localhost
DB_PORT=5432
```

## 🔧 Turborepo Configuration

The project uses Turborepo for:
- **Task Caching:** Intelligent caching of build outputs and task results
- **Task Orchestration:** Parallel execution of tasks across packages
- **Dependency Management:** Automatic task dependency resolution

Key tasks defined in `turbo.json`:
- `build` - Build all applications with dependency awareness
- `lint` - Run linting across all packages
- `dev` - Start development servers

## 🏗️ Architecture Decisions

1. **Monorepo Structure:** Enables code sharing and consistent tooling across applications
2. **Package Separation:** Clean separation of concerns with dedicated packages for configs and utilities
3. **Build Optimization:** Turborepo caching reduces build times significantly
4. **Type Safety:** Full TypeScript coverage ensures robust development experience

**Happy Learning! 🎉**