#!/bin/bash

# Function to create JSON files
create_json_file() {
  filename=$1
  content=$2
  echo "$content" > "$filename"
  echo "Created $filename"
}

# 1. users.json
create_json_file "users.json" '[
  {
    "FirstName": "Alice",
    "LastName": "Smith",
    "Email": "alice@example.com",
    "PasswordHash": "hashed_password_1",
    "PhoneNumber": "1234567890",
    "IsActive": true
  },
  {
    "FirstName": "Bob",
    "LastName": "Johnson",
    "Email": "bob@example.com",
    "PasswordHash": "hashed_password_2",
    "PhoneNumber": "0987654321",
    "IsActive": true
  }
]'

# 2. roles.json
create_json_file "roles.json" '[
  {
    "RoleName": "Admin",
    "Description": "Administrator with full permissions"
  },
  {
    "RoleName": "Agent",
    "Description": "Real estate agent"
  },
  {
    "RoleName": "User",
    "Description": "Regular user"
  }
]'

# 3. userRoles.json
create_json_file "userRoles.json" '[
  {
    "UserID": 1,
    "RoleID": 1
  },
  {
    "UserID": 2,
    "RoleID": 2
  }
]'

# 4. serviceTypes.json
create_json_file "serviceTypes.json" '[
  {
    "ServiceTypeName": "Contractor",
    "Description": "Provides contracting services"
  },
  {
    "ServiceTypeName": "Legal Team",
    "Description": "Provides legal services"
  },
  {
    "ServiceTypeName": "Inspector",
    "Description": "Conducts property inspections"
  }
]'

# 5. services.json
create_json_file "services.json" '[
  {
    "Name": "John'\''s Contracting",
    "ContactInfo": "john@contracting.com",
    "ServiceTypeID": 1,
    "Address": "123 Main St",
    "Email": "john@contracting.com",
    "Phone": "555-1234"
  },
  {
    "Name": "Legal Eagles",
    "ContactInfo": "info@legaleagles.com",
    "ServiceTypeID": 2,
    "Address": "456 Elm St",
    "Email": "info@legaleagles.com",
    "Phone": "555-5678"
  },
  {
    "Name": "Inspect It All",
    "ContactInfo": "contact@inspectitall.com",
    "ServiceTypeID": 3,
    "Address": "789 Oak St",
    "Email": "contact@inspectitall.com",
    "Phone": "555-9012"
  }
]'

# 6. properties.json
create_json_file "properties.json" '[
  {
    "OwnerID": 2,
    "Address": "100 Market St",
    "City": "San Francisco",
    "State": "CA",
    "ZipCode": "94111",
    "Country": "USA",
    "Latitude": 37.7946,
    "Longitude": -122.3950,
    "PropertyType": "Condo",
    "Bedrooms": 2,
    "Bathrooms": 2,
    "SquareFootage": 1200,
    "Price": 1000000,
    "Description": "Beautiful condo in the heart of the city",
    "IsActive": true
  }
]'

# 7. propertyInspectionReports.json
create_json_file "propertyInspectionReports.json" '[
  {
    "PropertyID": 1,
    "InspectorID": 3,
    "InspectionDate": "2023-01-15T10:00:00Z",
    "Findings": "No major issues",
    "Recommendations": "Regular maintenance recommended"
  }
]'

# 8. propertyMedia.json
create_json_file "propertyMedia.json" '[
  {
    "PropertyID": 1,
    "MediaType": "Image",
    "MediaURL": "http://example.com/media/property1/image1.jpg"
  },
  {
    "PropertyID": 1,
    "MediaType": "Image",
    "MediaURL": "http://example.com/media/property1/image2.jpg"
  }
]'

# 9. conversations.json
create_json_file "conversations.json" '[
  {
    "Subject": "Interested in Property #1"
  }
]'

# 10. messages.json
create_json_file "messages.json" '[
  {
    "ConversationID": 1,
    "SenderID": 1,
    "Content": "Hi, I'\''m interested in your property.",
    "SentAt": "2023-02-01T09:00:00Z",
    "IsRead": false
  },
  {
    "ConversationID": 1,
    "SenderID": 2,
    "Content": "Thanks for your interest!",
    "SentAt": "2023-02-01T10:00:00Z",
    "IsRead": false
  }
]'

# 11. favorites.json
create_json_file "favorites.json" '[
  {
    "UserID": 1,
    "PropertyID": 1
  }
]'

# 12. reviews.json
create_json_file "reviews.json" '[
  {
    "ReviewerID": 1,
    "PropertyID": 1,
    "Rating": 5,
    "Comment": "Great property!"
  }
]'

# 13. notifications.json
create_json_file "notifications.json" '[
  {
    "UserID": 1,
    "Message": "You have a new message",
    "IsRead": false
  }
]'

# 14. adminSettings.json
create_json_file "adminSettings.json" '[
  {
    "SettingName": "SiteTitle",
    "SettingValue": "Realist App",
    "Description": "The title of the site"
  }
]'

# 15. permissions.json
create_json_file "permissions.json" '[
  {
    "PermissionName": "CanEditProperties",
    "Description": "Allows editing of properties"
  },
  {
    "PermissionName": "CanDeleteUsers",
    "Description": "Allows deletion of users"
  }
]'

# 16. rolePermissions.json
create_json_file "rolePermissions.json" '[
  {
    "RoleID": 1,
    "PermissionID": 1
  },
  {
    "RoleID": 1,
    "PermissionID": 2
  },
  {
    "RoleID": 2,
    "PermissionID": 1
  }
]'

# 17. aiReports.json
create_json_file "aiReports.json" '[
  {
    "Title": "Market Analysis for Property #1",
    "Content": "This is an AI-generated report.",
    "GeneratedBy": 1
  }
]'

# 18. aiReportProperties.json
create_json_file "aiReportProperties.json" '[
  {
    "AIReportID": 1,
    "PropertyID": 1
  }
]'

# 19. aiReportServices.json
create_json_file "aiReportServices.json" '[
  {
    "AIReportID": 1,
    "ServiceID": 1
  }
]'

# 20. aiReportRecipients.json
create_json_file "aiReportRecipients.json" '[
  {
    "AIReportID": 1,
    "RecipientEmail": "recipient@example.com",
    "SentAt": "2023-02-02T12:00:00Z"
  }
]'

echo "All JSON files have been created in the seed-data directory."
