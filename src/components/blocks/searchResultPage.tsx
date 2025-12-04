import useFetch from "../../customHooks/useFetch";
import type { SearchPageProps, SearchResponse } from "../../common/interface";
import Card from "../ui/Card";
import CardSkeleton from "../ui/CardSkeleton";
import NoState from "./NoDataFound";
import { Pagination } from "../ui/Pagination";
import { useEffect } from "react";
import SelectDropdown from "../ui/SelectDropdown";

const searchPage = ({ api, setPage, setSort }: SearchPageProps) => {
  const { loading, response } = useFetch<SearchResponse>({ url: api });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [response]);

  if (loading) {
    return (
      <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4 mx-auto w-full max-w-[1600px] p-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </ul>
    );
  }

  if (!response || response.results.length === 0) {
    return <NoState />;
  }

  return (
    <div className="p-4">
      {response?.breadcrumbs[0]?.filterValue ? (
        <>
          <h2 className="text-2xl font-semibold">
            Results for "{response.query.original ? response.query.original : response?.breadcrumbs[0]?.filterValue }"
          </h2>
          <h3 className="text-gray-600">
            showing results {response.pagination.totalResults}
          </h3>

          <div className="border-b border-gray-300 my-4"></div>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold flex justify-center">
            Trending Style showcase
          </h2>
          <h4 className="flex justify-center text-gray-600 text-center">
            Discover the looks everyone's talking about this season
          </h4>
        </>
      )}
      <div className="pl-4 pt-2 flex items-center lg:w-1/6 gap-2">
        <SelectDropdown
          label="sort by:"
          options={(response?.sorting?.options || []).map((opt) => ({
            label: opt.label,
            value: opt.label,
          }))}
          value={
            (response?.sorting?.options || []).find((opt) => opt.active)
              ?.label || ""
          }
          onChange={(value) => {
            setSort(
              (response?.sorting?.options || []).find(
                (opt) => opt.label === value
              )!
            );
          }}
        />
      </div>
      <ul className=" p-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4 mx-auto w-full max-w-[1600px]">
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
