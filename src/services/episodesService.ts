import { cosmosDbClient } from '../utils/cosmosDbClient';

export async function getEpisodes() {
  const { resources } = await cosmosDbClient
    .database('twilightzone')
    .container('episodes')
    .items.query('SELECT * FROM c')
    .fetchAll();
  return resources;
}

export async function getEpisodeById(id: string) {
  const { resource } = await cosmosDbClient
    .database('twilightzone')
    .container('episodes')
    .item(id, id)
    .read();
  return resource;
}

export async function getEpisodeMedia(id: string) {
  const { resource } = await cosmosDbClient
    .database('twilightzone')
    .container('media')
    .item(id, id)
    .read();
  return resource;
}

export async function getFactsBySeason(seasonId: string) {
  const querySpec = {
    query: 'SELECT * FROM c WHERE c.seasonId = @seasonId',
    parameters: [{ name: '@seasonId', value: seasonId }]
  };

  const { resources } = await cosmosDbClient
    .database('twilightzone')
    .container('facts')
    .items.query(querySpec)
    .fetchAll();
  return resources;
}

export async function getRodSerlingInfo() {
  const { resources } = await cosmosDbClient
    .database('twilightzone')
    .container('serling')
    .items.query('SELECT * FROM c')
    .fetchAll();
  return resources[0];
}
