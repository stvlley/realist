# Realist App Initial Overview

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


