# Realist App Initial Overview

```sh
REALIST/
├── client/                         # Frontend (Client-Side) Directory (Next.js + TailwindCSS)
│   ├── public/                     # Static files (favicon, images, etc.)
│   ├── src/                        # Source files
│   │   ├── components/             # Reusable UI Components
│   │   ├── hooks/                  # Custom Hooks
│   │   ├── pages/                  # Next.js Pages (Routes)
│   │   ├── styles/                 # Global styles (TailwindCSS)
│   │   └── utils/                  # Helper functions
│   ├── package.json                # Client dependencies and scripts
│   ├── tailwind.config.js          # TailwindCSS Configuration
│   └── tsconfig.json               # TypeScript Configuration
│   
├── server/                         # Backend (Server-Side) Directory (Express.js)
│   ├── src/                        # Source files
│   │   ├── controllers/            # Controllers for handling API requests
│   │   ├── models/                 # Database Models (SQL)
│   │   ├── routes/                 # API Routes
│   │   ├── middleware/             # Express Middleware
│   │   └── services/               # Business Logic Services
│   ├── migrations/                 # Database migration scripts (e.g., raw SQL or other migration tools)
│   ├── .env                        # Environment variables (Supabase credentials, secrets)
│   ├── package.json                # Server dependencies and scripts
│   ├── tsconfig.json               # TypeScript Configuration
│   ├── nodemon.json                # Nodemon Configuration for auto-reloading
│   └── README.md                   # Backend documentation
│
├── shared/                         # Shared files and utilities between client and server
│   └── utils/                      # Utility functions shared between client and server
│
├── node_modules/                   # Node.js dependencies
├── .gitignore                      # Git ignore file
└── README.md                       # Project documentation
```

## Overview
This project is built using a modern stack with a focus on performance and scalability. Below you will find the details of the technologies and libraries we are using for both the web client and the server.

## Web Client

### Core Technologies
- **[Next.js](https://nextjs.org/)**: The React framework for production - provides server-side rendering and generating static websites.
- **[TailwindCSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapidly building custom designs.

### State Management
- **[Redux](https://redux.js.org/)**: A Predictable State Container for JS Apps.

### Libraries
- **[@mui/x-data-grid](https://mui.com/components/data-grid/)**: Provides data grid functionality that works well with material-UI.
- **[@mui/material](https://mui.com/)**: React UI framework for faster and easier web development.
- **[@emotion/react](https://emotion.sh/docs/@emotion/react)** and **[@emotion/style](https://emotion.sh/docs/@emotion/style)**: CSS-in-JS library designed to write css styles with JavaScript.
- **[axios](https://axios-http.com/)**: Promise based HTTP client for the browser and node.js.
- **[Heroicons/react](https://github.com/tailwindlabs/heroicons#react)**: Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
- **[Tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)**: A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.

### Utilities
- **[uuid](https://www.npmjs.com/package/uuid)**: For the generation of RFC4122 UUIDs.
- **[numeral](https://www.npmjs.com/package/numeral)**: A library for formatting and manipulating numbers.

## Server

### Core Technologies
- **[Express](https://expressjs.com/)**: Fast, unopinionated, minimalist web framework for Node.js.
- **[Neon](https://www.neon-bindings.com/)**: Allows writing Rust code that compiles to native Node.js modules.
- **[Drizzle](https://trufflesuite.com/docs/drizzle/)**: A collection of front-end libraries that make writing dapp user interfaces easier and more predictable.

### Middleware
- **[body-parser](https://www.npmjs.com/package/body-parser)**: Node.js body parsing middleware.
- **[cors](https://www.npmjs.com/package/cors)**: Package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- **[helmet](https://helmetjs.github.io/)**: Helmet helps secure your Express apps by setting various HTTP headers.
- **[morgan](https://www.npmjs.com/package/morgan)**: HTTP request logger middleware for node.js.

### Development Tools
- **[Concurrently](https://www.npmjs.com/package/concurrently)**: Run multiple commands concurrently.
- **[nodemon](https://nodemon.io/)**: Monitor for any changes in your node.js application and automatically restart the server.
- **[ts-node](https://typestrong.org/ts-node/)**: TypeScript execution engine and REPL for Node.js.

### Typings
- **[@types/node](https://www.npmjs.com/package/@types/node)**, **[@types/express](https://www.npmjs.com/package/@types/express)**, **[@types/uuid](https://www.npmjs.com/package/@types/uuid)**, **[@types/numeral](https://www.npmjs.com/package/@types/numeral)**, **[@types/cors](https://www.npmjs.com/package/@types/cors)**: TypeScript definitions for Node.js modules.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
```sh
npm install npm@latest -g

git clone https://github.com/stvlley/realist.git

npm install