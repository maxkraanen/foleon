export interface Article {
  name: string;
  identifier: string;
}

export interface PublicationData {
  page_count: number;
  page: number; //current page
  _embedded?: { edition?: Article[] };
}

export interface FilterOption {
  name: string;
  identifier: string;
}
