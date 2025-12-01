import { SearchX } from "lucide-react";

const NoState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <SearchX size={100} />
      <h2 className="mt-6 text-xl font-semibold text-gray-800 text-center">
        <>Oops! We couldn't find anything for your search</>
      </h2>

      <p className="mt-1 text-sm text-gray-500 max-w-xs text-center">
        Try checking your spelling or using more general terms.
      </p>
    </div>
  );
};
export default NoState;
