# Realist App Directory Structure

```bash
Realist-App/
├── public/                         # Static files
│   ├── favicon.ico                 # Favicon
│   ├── images/                     # App images and assets
│   └── robots.txt                  # SEO and crawlers
├── src/                            # Source files
│   ├── components/                 # Reusable React components
│   │   ├── Layout.js               # Main layout component
│   │   ├── Navbar.js               # Navbar component
│   │   └── Tabs.js                 # Tabs component
│   ├── pages/                      # Next.js Pages (Routing)
│   │   ├── api/                    # API Routes
│   │   │   ├── services/           # Backend service APIs
│   │   │   │   └── index.js        # API for fetching services
│   │   │   └── auth.js             # Authentication API
│   │   ├── index.js                # Homepage
│   │   ├── services.js             # Services page
│   │   ├── products.js             # Products page
│   │   ├── users.js                # Users management page
│   │   └── _app.js                 # Custom app wrapper for global styles
│   ├── styles/                     # Styling (Tailwind or global styles)
│   │   ├── globals.css             # Global styles with TailwindCSS
│   │   └── tailwind.config.js      # TailwindCSS configuration
│   ├── hooks/                      # Custom React Hooks
│   │   └── useAuth.js              # Authentication hook
│   ├── context/                    # Global state/context providers
│   │   └── AuthContext.js          # Authentication context
│   └── utils/                      # Utility functions
│       ├── api.js                  # API helper functions
│       └── validation.js           # Form validation functions
├── prisma/                         # Prisma ORM (If using PostgreSQL/Supabase)
│   ├── schema.prisma               # Database schema
│   └── migrations/                 # Database migrations
├── .env.local                      # Environment variables for development
├── .gitignore                      # Git ignore file
├── next.config.js                  # Next.js configuration
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.js              # TailwindCSS configuration
├── package.json                    # Dependencies and scripts
├── yarn.lock                       # Lockfile for Yarn dependencies
└── README.md                       # Project documentation



# Realist App Database Schema

## 1. Users Table
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| name             | VARCHAR(255)  | Full name of the user                 |
| email            | VARCHAR(255)  | Email address (unique)                |
| password_hash    | TEXT          | Hashed password                       |
| role             | ENUM          | ['agent', 'client', 'contractor', 'admin'] |
| phone_number     | VARCHAR(20)   | Contact number                        |
| created_at       | TIMESTAMP     | When the user was created             |
| updated_at       | TIMESTAMP     | When the user was last updated        |

## 2. Roles Table
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| role_name        | VARCHAR(255)  | Name of the role (e.g., 'agent', 'admin') |
| created_at       | TIMESTAMP     | When the role was created             |

## 3. UserRoles Table
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| user_id          | UUID          | Foreign key referencing users(id)     |
| role_id          | UUID          | Foreign key referencing roles(id)     |
| created_at       | TIMESTAMP     | When the user-role mapping was created |

## 4. Properties Table
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| owner_id         | UUID          | Foreign key referencing users(id)     |
| address          | TEXT          | Address of the property               |
| property_type    | VARCHAR(255)  | Type of property                      |
| price            | DECIMAL(10,2) | Property price                        |
| details          | JSON          | JSON column for additional details    |
| created_at       | TIMESTAMP     | When the property was created         |
| updated_at       | TIMESTAMP     | When the property was last updated    |

## 5. PropertyInspectionReports Table
| Column                  | Data Type     | Description                           |
|-------------------------|---------------|---------------------------------------|
| id                      | UUID          | Primary key                           |
| property_id             | UUID          | Foreign key referencing properties(id)|
| inspection_report       | JSON          | Details of the inspection             |
| created_at              | TIMESTAMP     | When the report was created           |

## 6. PropertyMedia Table
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| property_id      | UUID          | Foreign key referencing properties(id)|
| media_url        | TEXT          | URL of the media                      |
| media_type       | ENUM          | ['image', 'video']                    |
| created_at       | TIMESTAMP     | When the media was uploaded           |

## 7. Conversations Table
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| sender_id        | UUID          | Foreign key referencing users(id)     |
| receiver_id      | UUID          | Foreign key referencing users(id)     |
| created_at       | TIMESTAMP     | When the conversation was created     |

## 8. Messages Table
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| conversation_id  | UUID          | Foreign key referencing conversations(id) |
| sender_id        | UUID          | Foreign key referencing users(id)     |
| message          | TEXT          | Message content                       |
| created_at       | TIMESTAMP     | When the message was sent             |

## 9. Favorites Table
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| user_id          | UUID          | Foreign key referencing users(id)     |
| property_id      | UUID          | Foreign key referencing properties(id)|
| created_at       | TIMESTAMP     | When the favorite was created         |

## 10. Reviews Table
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| reviewer_id      | UUID          | Foreign key referencing users(id)     |
| reviewed_item_id | UUID          | Foreign key referencing properties(id), services(id) |
| rating           | INT           | Rating score                          |
| review_text      | TEXT          | Review content                        |
| created_at       | TIMESTAMP     | When the review was created           |

## 11. Services Table (Replaces Contractors)
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| service_name     | VARCHAR(255)  | Name of the service                   |
| description      | TEXT          | Description of the service            |
| created_at       | TIMESTAMP     | When the service was created          |

## 12. ServiceTypes Table (New)
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| service_type_name| VARCHAR(255)  | Name of the service type              |
| created_at       | TIMESTAMP     | When the service type was created     |

## 13. Notifications Table
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| user_id          | UUID          | Foreign key referencing users(id)     |
| message          | TEXT          | Notification content                  |
| created_at       | TIMESTAMP     | When the notification was sent        |

## 14. AdminSettings Table
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| setting_name     | VARCHAR(255)  | Name of the setting                   |
| setting_value    | TEXT          | Value of the setting                  |
| created_at       | TIMESTAMP     | When the setting was created          |

## 15. Permissions Table
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| role_id          | UUID          | Foreign key referencing roles(id)     |
| permission_name  | VARCHAR(255)  | Name of the permission                |
| created_at       | TIMESTAMP     | When the permission was created       |

## 16. AIReports Table
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| report_name      | VARCHAR(255)  | Name of the AI-generated report       |
| report_content   | TEXT          | AI-generated report content           |
| created_at       | TIMESTAMP     | When the report was generated         |

## 17. AIReportProperties Table
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| ai_report_id     | UUID          | Foreign key referencing AIReports(id) |
| property_id      | UUID          | Foreign key referencing properties(id)|
| created_at       | TIMESTAMP     | When the link was created             |

## 18. AIReportServices Table (Replaces AIReportContractors)
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| ai_report_id     | UUID          | Foreign key referencing AIReports(id) |
| service_id       | UUID          | Foreign key referencing services(id)  |
| created_at       | TIMESTAMP     | When the link was created             |

## 19. AIReportRecipients Table (Optional)
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| ai_report_id     | UUID          | Foreign key referencing AIReports(id) |
| recipient_id     | UUID          | Foreign key referencing users(id)     |
| created_at       | TIMESTAMP     | When the report was sent to recipient |

## 20. Organization Table (New)
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| organization_name| VARCHAR(255)  | Name of the organization              |
| address          | TEXT          | Organization's address                |
| contact_email    | VARCHAR(255)  | Contact email for the organization    |
| phone_number     | VARCHAR(20)   | Phone number for the organization     |
| created_at       | TIMESTAMP     | When the organization was created     |
| updated_at       | TIMESTAMP     | When the organization was last updated|