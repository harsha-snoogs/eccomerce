export interface Response {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface SearchResponse {
  pagination: Pagination;
  results: ProductResult[];
}

export interface Pagination {
  totalResults: number;
  begin: number;
  end: number;
  currentPage: number;
  totalPages: number;
  previousPage: number | null;
  nextPage: number | null;
  perPage: number;
  defaultPerPage: number;
}

export interface ProductResult {
  id: string;
  name: string;
  brand: string;
  price: string;
  imageUrl: string;
  url: string;
  description?: string;
  [key: string]: any;
}

export interface CardProps {
  image: string;
  title: string;
  description?: string;
  price: string;
  msrp: string;
}
