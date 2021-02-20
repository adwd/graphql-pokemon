import { ApolloServer } from 'apollo-server';
import schema from './schema';

const server = new ApolloServer({ schema });
const PORT = 5000;

server.listen(PORT);
console.log(`GraphQL-Pokemon started on http://localhost:${PORT}/`);
