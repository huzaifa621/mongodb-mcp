import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { MongoClient } from "mongodb";

const server = new McpServer({
   name: "MongoDB",
   version: "1.0.0",
   capabilities: {
      resources: {},
      tools: {},
   },
});

// Helper function to get employees data from MongoDB
async function getEmployeesData() {
   const client = new MongoClient("mongodb://localhost:27017");
   await client.connect();

   const db = client.db("mongodb-mcp");
   const employeesCollection = db.collection("employees");

   const result = await employeesCollection.find({}).toArray();

   await client.close();

   return result;
}

// Helper function to get students data from MongoDB
async function getStudentsData() {
   const client = new MongoClient("mongodb://localhost:27017");
   await client.connect();

   const db = client.db("mongodb-mcp");
   const studentsCollection = db.collection("students");

   const result = await studentsCollection.find({}).toArray();

   await client.close();

   return result;
}

// Tool to get employees data
server.tool(
   "get-employees-data",
   "Used to get employees data from the mongodb database. No arguments are required.",
   async () => {
      const data = await getEmployeesData();
      return {
         content: [
            {
               type: "text",
               text: JSON.stringify(data),
            },
         ],
      };
   }
);

// Tool to get student data
server.tool(
   "get-students-data",
   "Used to get students data from the mongodb database. No arguments are required.",
   async () => {
      const data = await getStudentsData();
      return {
         content: [
            {
               type: "text",
               text: JSON.stringify(data),
            },
         ],
      };
   }
);

async function main() {
   const transport = new StdioServerTransport();
   await server.connect(transport);
   console.error("MongoDB MCP Server running on stdio");
}

main().catch((error) => {
   console.error("Fatal error in main():", error);
   process.exit(1);
});
