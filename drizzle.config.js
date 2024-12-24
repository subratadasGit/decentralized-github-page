export default {
    dialect: "postgresql",
    schema: "./utils/db/schema.ts",
    out: "./drizzle",
  
    dbCredentials: {
      url: "postgresql://neondb_owner:xJgI26CsONmY@ep-white-wind-a8kzbfk4.eastus2.azure.neon.tech/neondb?sslmode=require",
      connectionString:
        "postgresql://neondb_owner:xJgI26CsONmY@ep-white-wind-a8kzbfk4.eastus2.azure.neon.tech/neondb?sslmode=require",
    },
  };