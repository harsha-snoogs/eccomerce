import { endpoints } from "../service/api";
export const Helper = {
  constructApiEndpoint(query: string, page: number =1): string {
    const searchedQuery = query ?? "";
    const endpoint = `${endpoints.searchApi}&q=${searchedQuery}&page=${page}`;
    return endpoint;
  },
};

export default Helper;
