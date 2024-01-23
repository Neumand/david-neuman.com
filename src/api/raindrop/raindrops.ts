/**
 * https://developer.raindrop.io/v1/raindrops/multiple
 */

type UserRef = {
  $ref: string;
  $id: number;
};

type Media = {
  link: string;
  type: string;
};

type Reminder = {
  date: null | string;
};

type CollectionRef = {
  $ref: string;
  $id: number;
  oid: number;
};

type CreatorRef = {
  _id: number;
  avatar: string;
  name: string;
  email: string;
};

export type Raindrop = {
  _id: number;
  link: string;
  title: string;
  excerpt: string;
  note: string;
  type: string;
  user: UserRef;
  cover: string;
  media: Media[];
  tags: any[];
  important: boolean;
  reminder: Reminder;
  removed: boolean;
  created: string;
  lastUpdate: string;
  collection: CollectionRef;
  highlights: any[];
  domain: string;
  creatorRef: CreatorRef;
  sort: number;
  collectionId: number;
};

export type GetRaindropsByCollectionIdResponse = {
  result: boolean;
  items: Raindrop[];
  count: number;
  collectionId: number;
};
