# Realist App Initial Overview

```bash
Realist-App/
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


### TABLES 

## 1. Users Table
| Column           | Data Type     | Description                           |
|------------------|---------------|---------------------------------------|
| id               | UUID          | Primary key                           |
| name             | VARCHAR(255)  | Full name of the user                 |
| email            | VARCHAR(255)  | Email address (unique)                |
| password_hash    | TEXT          | Hashed password                       |
| role             | ENUM          | ['agent', 'client', 'contractor', 'admin'] |
| phone_number     | VARCHAR(20)   | Contact number                        |
| organization_id  | UUID          | Foreign key referencing `organization(id)` |
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
