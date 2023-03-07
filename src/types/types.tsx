export interface Item {
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
