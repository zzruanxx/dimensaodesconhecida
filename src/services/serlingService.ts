import { getCosmosDbClient } from '../utils/cosmosdb';

export async function getSerlingInfo() {
  const client = await getCosmosDbClient();
  const { resources } = await client.database('twilight').container('serling').items.query('SELECT * FROM c').fetchAll();
  return resources[0];
}
