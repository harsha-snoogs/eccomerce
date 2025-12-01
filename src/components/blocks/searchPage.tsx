import { useRef, useState } from "react";
import useFetch from "../../customHooks/useFetch";
import type { ProductResult, SearchResponse } from "../../common/interface";
import NoDataFound from "./NoDataFound";
import Helper from "../../common/utils";
import Card from "../ui/Card";

const searchPage = () => {
  const [api, setApi] = useState<string>("");
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const { loading, response, error } = useFetch<SearchResponse>({ url: api });
  const [page, setPage] = useState<number>(1);

  const handleSearchClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    console.log(`Search text - ${inputSearchRef.current?.value}`);
    const endpoint = Helper.constructApiEndpoint(
      inputSearchRef.current?.value ?? "",
      1
    );
    setApi(endpoint);
    setPage(1);
  };

  const handlePrevPage = () => {
    if (!response) return;
    const { currentPage } = response.pagination;
    if (currentPage > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (!response) return;
    const { currentPage, totalPages } = response.pagination;
    if (currentPage < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="m-4">
      <input
        ref={inputSearchRef}
        onKeyDown={handleSearchClick}
        placeholder="Search"
      />
      {loading && <h1>Loading</h1>}
      {error && <h2>{error.message}</h2>}
      {response && (
        <>
          <p>
            Showing {response.pagination.begin}–{response.pagination.end} of{" "}
            {response.pagination.totalResults}
          </p>

          <ul className="card">
            {response.results.map((product) => (
              <Card
                image={product.imageUrl}
                title={product.name}
                price={product.price}
                msrp={product.msrp}
                description=""
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default searchPage;
