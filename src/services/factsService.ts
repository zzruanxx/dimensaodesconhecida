import { getCosmosDbClient } from '../utils/cosmosdb';

export async function getFactsBySeason(season: number) {
  const client = await getCosmosDbClient();
  const { resources } = await client.database('twilight').container('facts').items.query({
    query: 'SELECT * FROM c WHERE c.season = @season',
    parameters: [{ name: '@season', value: season }]
  }).fetchAll();
  return resources;
}
