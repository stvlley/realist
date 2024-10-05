import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
const prisma = new PrismaClient();



async function deleteAllData(orderedFileNames: string[]) {
  const modelNames = orderedFileNames.map((fileName) => {
    const modelName = path.basename(fileName, path.extname(fileName));
    return modelName.charAt(0).toUpperCase() + modelName.slice(1);
  });

  for (const modelName of modelNames) {
    const model: any = prisma[modelName as keyof typeof prisma];
    if (model) {
      await model.deleteMany({});
      console.log(`Cleared data from ${modelName}`);
    } else {
      console.error(
        `Model ${modelName} not found. Please ensure the model name is correctly specified.`
      );
    }
  }
}

// Define type interfaces for data being seeded
interface User {
  FirstName?: string;
  LastName?: string;
  Email: string;
  PasswordHash: string;
  PhoneNumber?: string;
  IsActive?: boolean;
}

interface Role {
  RoleName: string;
  Description?: string;
}

interface UserRole {
  UserID: number;
  RoleID: number;
}

interface ServiceType {
  ServiceTypeName: string;
  Description?: string;
}

interface Service {
  Name: string;
  ContactInfo?: string;
  ServiceTypeID: number;
  Address?: string;
  Email?: string;
  Phone?: string;
}

interface Property {
  OwnerID: number;
  Address?: string;
  City?: string;
  State?: string;
  ZipCode?: string;
  Country?: string;
  Latitude?: number;
  Longitude?: number;
  PropertyType?: string;
  Bedrooms?: number;
  Bathrooms?: number;
  SquareFootage?: number;
  Price?: number;
  Description?: string;
  IsActive?: boolean;
}

interface PropertyInspectionReport {
  PropertyID: number;
  InspectorID: number;
  InspectionDate?: string; // Or Date
  Findings?: string;
  Recommendations?: string;
}

interface PropertyMedia {
  PropertyID: number;
  MediaType?: string;
  MediaURL?: string;
}

interface Conversation {
  Subject?: string;
}

interface Message {
  ConversationID: number;
  SenderID: number;
  Content?: string;
  SentAt?: string; // Or Date
  IsRead?: boolean;
}

interface Favorite {
  UserID: number;
  PropertyID: number;
}

interface Review {
  ReviewerID: number;
  PropertyID: number;
  Rating: number;
  Comment?: string;
}

interface Notification {
  UserID: number;
  Message?: string;
  IsRead?: boolean;
}

interface AdminSetting {
  SettingName: string;
  SettingValue?: string;
  Description?: string;
}

interface Permission {
  PermissionName: string;
  Description?: string;
}

interface RolePermission {
  RoleID: number;
  PermissionID: number;
}

interface AIReport {
  Title?: string;
  Content?: string;
  GeneratedBy?: number;
}

interface AIReportProperty {
  AIReportID: number;
  PropertyID: number;
}

interface AIReportService {
  AIReportID: number;
  ServiceID: number;
}

interface AIReportRecipient {
  AIReportID: number;
  RecipientEmail: string;
  SentAt?: string; // Or Date
}

async function main() {
  // Helper function to read JSON files
  const loadData = <T>(fileName: string): T[] => {
    const filePath = path.join(__dirname, fileName);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  };

  // Seed Users
  const usersData: User[] = loadData<User>('users.json');
  const users = [];
  for (const userData of usersData) {
    const user = await prisma.user.create({ data: userData });
    users.push(user);
  }

  // Seed Roles
  const rolesData: Role[] = loadData<Role>('roles.json');
  const roles = [];
  for (const roleData of rolesData) {
    const role = await prisma.role.create({ data: roleData });
    roles.push(role);
  }

  // Seed UserRoles
  const userRolesData: UserRole[] = [];
  // Adjust IDs based on created users and roles
  userRolesData.push({ UserID: users[0].UserID, RoleID: roles[0].RoleID });
  userRolesData.push({ UserID: users[1].UserID, RoleID: roles[1].RoleID });
  for (const userRoleData of userRolesData) {
    await prisma.userRole.create({ data: userRoleData });
  }

  // Seed ServiceTypes
  const serviceTypesData: ServiceType[] = loadData<ServiceType>('serviceTypes.json');
  const serviceTypes = [];
  for (const serviceTypeData of serviceTypesData) {
    const serviceType = await prisma.serviceType.create({ data: serviceTypeData });
    serviceTypes.push(serviceType);
  }

  // Seed Services
  const servicesData: Service[] = loadData<Service>('services.json');
  const services = [];
  for (const serviceData of servicesData) {
    // Map ServiceTypeID to actual IDs from serviceTypes
    const serviceType = serviceTypes.find(st => st.ServiceTypeName === serviceTypesData[serviceData.ServiceTypeID - 1].ServiceTypeName);
    if (serviceType) {
      serviceData.ServiceTypeID = serviceType.ServiceTypeID;
    }
    const service = await prisma.service.create({ data: serviceData });
    services.push(service);
  }

  // Seed Properties
  const propertiesData: Property[] = loadData<Property>('properties.json');
  const properties = [];
  for (const propertyData of propertiesData) {
    // Map OwnerID to actual user ID
    const owner = users.find(u => u.UserID === propertyData.OwnerID);
    if (owner) {
      propertyData.OwnerID = owner.UserID;
    }
    const property = await prisma.property.create({ data: propertyData });
    properties.push(property);
  }

  // Seed PropertyInspectionReports
  const reportsData: PropertyInspectionReport[] = loadData<PropertyInspectionReport>('propertyInspectionReports.json');
  for (const reportData of reportsData) {
    await prisma.propertyInspectionReport.create({ data: reportData });
  }

  // Seed PropertyMedia
  const mediaData: PropertyMedia[] = loadData<PropertyMedia>('propertyMedia.json');
  for (const mediaDataItem of mediaData) {
    await prisma.propertyMedia.create({ data: mediaDataItem });
  }

  // Seed Conversations
  const conversationsData: Conversation[] = loadData<Conversation>('conversations.json');
  const conversations = [];
  for (const conversationData of conversationsData) {
    const conversation = await prisma.conversation.create({ data: conversationData });
    conversations.push(conversation);
  }

  // Seed Messages
  const messagesData: Message[] = loadData<Message>('messages.json');
  for (const messageData of messagesData) {
    await prisma.message.create({ data: messageData });
  }

  // Seed Favorites
  const favoritesData: Favorite[] = loadData<Favorite>('favorites.json');
  for (const favoriteData of favoritesData) {
    await prisma.favorite.create({ data: favoriteData });
  }

  // Seed Reviews
  const reviewsData: Review[] = loadData<Review>('reviews.json');
  for (const reviewData of reviewsData) {
    await prisma.review.create({ data: reviewData });
  }

  // Seed Notifications
  const notificationsData: Notification[] = loadData<Notification>('notifications.json');
  for (const notificationData of notificationsData) {
    await prisma.notification.create({ data: notificationData });
  }

  // Seed AdminSettings
  const adminSettingsData: AdminSetting[] = loadData<AdminSetting>('adminSettings.json');
  for (const settingData of adminSettingsData) {
    await prisma.adminSetting.create({ data: settingData });
  }

  // Seed Permissions
  const permissionsData: Permission[] = loadData<Permission>('permissions.json');
  const permissions = [];
  for (const permissionData of permissionsData) {
    const permission = await prisma.permission.create({ data: permissionData });
    permissions.push(permission);
  }

  // Seed RolePermissions
  const rolePermissionsData: RolePermission[] = [];
  // Adjust IDs based on created roles and permissions
  rolePermissionsData.push({ RoleID: roles[0].RoleID, PermissionID: permissions[0].PermissionID });
  rolePermissionsData.push({ RoleID: roles[0].RoleID, PermissionID: permissions[1].PermissionID });
  rolePermissionsData.push({ RoleID: roles[1].RoleID, PermissionID: permissions[0].PermissionID });
  for (const rolePermissionData of rolePermissionsData) {
    await prisma.rolePermission.create({ data: rolePermissionData });
  }

  // Seed AIReports
  const aiReportsData: AIReport[] = loadData<AIReport>('aiReports.json');
  const aiReports = [];
  for (const aiReportData of aiReportsData) {
    const aiReport = await prisma.aIReport.create({ data: aiReportData });
    aiReports.push(aiReport);
  }

  // Seed AIReportProperties
  const aiReportPropertiesData: AIReportProperty[] = [];
  aiReportPropertiesData.push({ AIReportID: aiReports[0].AIReportID, PropertyID: properties[0].PropertyID });
  for (const aiReportPropertyData of aiReportPropertiesData) {
    await prisma.aIReportProperty.create({ data: aiReportPropertyData });
  }

  // Seed AIReportServices
  const aiReportServicesData: AIReportService[] = [];
  aiReportServicesData.push({ AIReportID: aiReports[0].AIReportID, ServiceID: services[0].ServiceID });
  for (const aiReportServiceData of aiReportServicesData) {
    await prisma.aIReportService.create({ data: aiReportServiceData });
  }

  // Seed AIReportRecipients
  const aiReportRecipientsData: AIReportRecipient[] = loadData<AIReportRecipient>('aiReportRecipients.json');
  for (const aiReportRecipientData of aiReportRecipientsData) {
    await prisma.aIReportRecipient.create({ data: aiReportRecipientData });
  }

  console.log('Seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error('Error seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
