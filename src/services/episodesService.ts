import { getCosmosDbClient } from '../utils/cosmosdb';

export async function getEpisodes() {
  const client = await getCosmosDbClient();
  const { resources } = await client.database('twilight').container('episodes').items.query('SELECT * FROM c').fetchAll();
  return resources;
}

export async function getEpisodeById(id: string) {
  const client = await getCosmosDbClient();
  const { resources } = await client.database('twilight').container('episodes').items.query({
    query: 'SELECT * FROM c WHERE c.id = @id',
    parameters: [{ name: '@id', value: id }]
  }).fetchAll();
  return resources[0];
}

export async function getEpisodeMedia(id: string) {
  const client = await getCosmosDbClient();
  const { resources } = await client.database('twilight').container('media').items.query({
    query: 'SELECT * FROM c WHERE c.episodeId = @id',
    parameters: [{ name: '@id', value: id }]
  }).fetchAll();
  return resources[0];
}
