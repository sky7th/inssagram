import "./env";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import { authenticateJwt } from "./passport";
import "./passport";

const PORT = process.env.POST || 4000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request })
});

server.express.use(authenticateJwt);

server.start({ port: PORT }, () => 
  console.log(`Server running on  http://localhost:${PORT}`)
);