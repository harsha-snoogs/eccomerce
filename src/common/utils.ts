import { endpoints } from "../service/api";
import type { SortingOption } from "./interface";

export const Helper = {
  constructApiEndpoint(
    query: string,
    page: number = 1,
    sort?: SortingOption
  ): string {
    const searchedQuery = query ?? "";
    const sortParam = sort ? `&sort.${sort.field}=${sort.direction}` : "";
    return `${endpoints.searchApi}&q=${searchedQuery}&page=${page}${sortParam}`;
  },
};

export default Helper;
