/**
 * https://developer.raindrop.io/v1/collections/methods
 */

export type UserRef = {
  _id: number;
  avatar: string;
  name: string;
  email: string;
};

export type Media = {
  link: string;
  type: string;
};

export type Reminder = {
  date: null | string;
};

export type CollectionRef = {
  $ref: string;
  $id: number;
  oid: number;
};

export type Collection = {
  _id: number;
  link: string;
  title: string;
  excerpt: string;
  note: string;
  type: string;
  user: {
    $ref: string;
    $id: number;
  };
  cover: string[];
  media: Media[];
  tags: string[];
  important: boolean;
  reminder: Reminder;
  removed: boolean;
  created: string;
  lastUpdate: string;
  collection: CollectionRef;
  highlights: string[];
  domain: string;
  creatorRef: UserRef;
  sort: number;
  collectionId: number;
  slug: string;
};

export type GetAllCollectionsResponse = {
  result: boolean;
  items: Collection[];
};
