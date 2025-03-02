import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { connectToDatabase } from "@/app/lib/mongodb";

connectToDatabase();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

export const GET = startServerAndCreateNextHandler(server);
export const POST = startServerAndCreateNextHandler(server);
