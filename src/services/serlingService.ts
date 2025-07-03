import { cosmosDbClient } from '../utils/cosmosDbClient';

export async function getSerlingInfo() {
  const { resources } = await cosmosDbClient
    .database('twilightzone')
    .container('serling')
    .items.query('SELECT * FROM c')
    .fetchAll();
  return resources[0];
}
