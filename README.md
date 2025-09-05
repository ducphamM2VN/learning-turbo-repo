# Employee Management App

A full-stack employee management application built within a pnpm monorepo, powered by Turborepo. The environment is fully containerized using Docker and VS Code Dev Containers for a seamless "one-click" setup.

## ✨ Features

- **Monorepo:** `pnpm` workspaces and `Turborepo` for efficient build caching and task orchestration.
- **Frontend:** A modern UI built with `Vue.js`.
- **Backend:** A robust API powered by `NestJS`.
- **Containerized Dev Environment:** Pre-configured with `Docker` and `VS Code Dev Containers` for a consistent and isolated development experience.
- **Code Quality:** `ESLint` and `Prettier` are set up for consistent code style and quality.

## 🛠️ Tech Stack

- **Monorepo:** [pnpm](https://pnpm.io/), [Turborepo](https://turbo.build/repo)
- **Backend:** [NestJS](https://nestjs.com/), [TypeScript](https://www.typescriptlang.org/)
- **Frontend:** [Vue.js](https://vuejs.org/)
- **Containerization:** [Docker](https://www.docker.com/)
- **Development:** [VS Code Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers)

## 📂 Project Structure

```
.
├── apps
│   ├── api/      # NestJS backend application
│   └── web/      # Vue.js frontend application
├── packages
│   ├── eslint-config/
│   ├── typescript-config/
│   └── ui/       # Shared UI components (React-based in starter)
└── docker-compose.yml
```

## 🚀 Getting Started

This project is configured to run in a development container. This is the recommended way to work on it, as it ensures all dependencies and services are set up correctly.

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [VS Code Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Setup

1.  **Clone the repository:**
    ```sh
    git clone <your-repository-url>
    cd employee-management
    ```

2.  **Open in VS Code:**
    ```sh
    code .
    ```

3.  **Reopen in Container:**
    - After opening the project, VS Code will detect the `.devcontainer` configuration and show a notification in the bottom-right corner.
    - Click **"Reopen in Container"**.
    - VS Code will build the Docker images and set up the development environment. This may take a few minutes on the first run as it downloads dependencies and builds the containers.

That's it! The `postCreateCommand` in the dev container will automatically run `pnpm install` to install all dependencies.

## 🏃 Running the Application

You can run these commands from the terminal inside the VS Code dev container.

- **Run all apps in development mode:**
  ```sh
  turbo run dev
  ```

- **Build all apps for production:**
  ```sh
  turbo run build
  ```

- **Run linting across the monorepo:**
  ```sh
  turbo run lint
  ```

- **Run commands for a specific app:**
  Use the `--filter` flag to target a single application.
  ```sh
  # Run the dev server for the web app only
  pnpm --filter web run serve

  # Build the api app only
  pnpm --filter api run build
  ```