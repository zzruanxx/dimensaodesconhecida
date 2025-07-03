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
