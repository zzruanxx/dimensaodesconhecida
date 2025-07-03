import { CosmosClient } from '@azure/cosmos';

let client: CosmosClient | null = null;

export async function getCosmosDbClient() {
  if (!client) {
    client = new CosmosClient({
      endpoint: process.env.COSMOS_DB_ENDPOINT!,
      key: process.env.COSMOS_DB_KEY!,
      connectionPolicy: { enableEndpointDiscovery: true, connectionMode: 'Gateway' }
    });
    // Testa conexão
    await client.getDatabaseAccount();
  }
  return client;
}
