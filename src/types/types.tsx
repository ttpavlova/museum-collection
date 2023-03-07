export interface Item {
  id: number;
  title: string;
  medium: string;
  culture: string;
  period: string;
  date: string;
  country: string;
  image: string;
}

export interface ItemDTO {
  objectID: number;
  title: string;
  medium: string;
  culture: string;
  period: string;
  objectDate: string;
  country: string;
  primaryImage: string;
}

export interface Items {
  total: number;
  objectIDs: Array<number>;
}
