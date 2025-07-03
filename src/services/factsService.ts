import { cosmosDbClient } from '../utils/cosmosDbClient';

export async function getFactsBySeason(season: number) {
  const query = {
    query: 'SELECT * FROM c WHERE c.season = @season',
    parameters: [{ name: '@season', value: season }]
  };
  const { resources } = await cosmosDbClient
    .database('twilightzone')
    .container('facts')
    .items.query(query)
    .fetchAll();
  return resources;
}
