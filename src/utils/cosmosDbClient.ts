import { CosmosClient } from '@azure/cosmos';

const endpoint = process.env.COSMOS_DB_ENDPOINT!;
const key = process.env.COSMOS_DB_KEY!;

if (!endpoint || !key) {
  throw new Error('Credenciais do Cosmos DB não configuradas.');
}

export const cosmosDbClient = new CosmosClient({
  endpoint,
  key,
  connectionPolicy: {
    // Garante conexão segura
    enableEndpointDiscovery: true,
    preferredLocations: ['Brazil South'],
    useMultipleWriteLocations: true
  }
});
