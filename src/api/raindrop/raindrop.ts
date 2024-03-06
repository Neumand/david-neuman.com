import type { Collection } from './collections';
import type { GetRaindropsByCollectionIdResponse, Raindrop } from './raindrops';

const raindropApiKey = import.meta.env.RAINDROP_TOKEN as string;

enum RaindropEndpoint {
  COLLECTIONS_GET_ALL = 'https://api.raindrop.io/rest/v1/collections',
  RAINDROPS_BY_COLLECTION_ID = 'https://api.raindrop.io/rest/v1/raindrops',
}

export async function getRaindrops(collectionId: number): Promise<Raindrop[]> {
  try {
    const response = await fetch(
      `${RaindropEndpoint.RAINDROPS_BY_COLLECTION_ID}/${collectionId}`,
      {
        headers: {
          Authorization: `Bearer ${raindropApiKey}`,
        },
      },
    );
    const raindrop = await response.json();
    return raindrop.items;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getCollections(): Promise<Collection[]> {
  try {
    const response = await fetch(RaindropEndpoint.COLLECTIONS_GET_ALL, {
      headers: {
        Authorization: `Bearer ${raindropApiKey}`,
      },
    });
    const collections = await response.json();
    return collections.items;
  } catch (error) {
    console.error(error);
    return [];
  }
}
