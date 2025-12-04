export interface Response {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface SearchResponse {
  pagination: Pagination;
  results: ProductResult[];
  breadcrumbs: BreadcrumbItem[];
  sorting: Sorting;
  query: Query;
}

export interface Query {
  original: string;
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

export interface BreadcrumbItem {
  filterValue: string;
}

export interface CardProps {
  image: string;
  title: string;
  description?: string;
  price: string;
  msrp: string;
}

export interface NavBarProps {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  searchText: string;
  handleTextSearch: () => void;
}
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  topPadding?: boolean;
}
export interface SearchBarInputProps {
  searchText: string;
  handleSearchClick: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}
export interface FetchProps {
  url: string;
}
export interface SearchPageProps {
  api: string;
  setPage: (newPage: number) => void;
  setSort: (sort: SortingOption) => void;
}

export interface SortingOption {
  direction: "asc" | "desc";
  field: string;
  label: string;
  active?: number;
}

export interface Sorting {
  options: SortingOption[];
}

export interface DropDownOption {
  label: string;
  value: string;
}

export interface SelectDropdownProps {
  label?: string;
  options: DropDownOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}