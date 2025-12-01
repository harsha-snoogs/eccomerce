import useFetch from "../../customHooks/useFetch";
import type { SearchResponse } from "../../common/interface";
import Card from "../ui/Card";
import CardSkeleton from "../ui/CardSkeleton";
import NoState from "./NoDataFound";
import { Pagination } from "../ui/Pagination";
import { useEffect } from "react";

interface SearchPageProps {
  api: string;
  setPage: (newPage: number) => void;
}
const searchPage = ({ api, setPage,  }: SearchPageProps) => {
  const { loading, response } = useFetch<SearchResponse>({ url: api });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [response]);

  if (loading) {
    return (
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4 mx-auto w-full max-w-[1600px]">
        {Array.from({ length: 10 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </ul>
    );
  }

  if (!response || response.results.length === 0) {
    return <NoState  />;
  }

  return (
    <div className="p-4">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4 mx-auto w-full max-w-[1600px]">
        {response.results.map((product) => (
          <Card
            key={product.id}
            image={product.thumbnailImageUrl}
            title={product.name}
            price={product.price}
            msrp={product.msrp}
            description={product.description}
          />
        ))}
      </ul>
      <Pagination
        currentPage={response.pagination.currentPage}
        totalPages={response.pagination.totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default searchPage;
