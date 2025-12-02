import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  topPadding?: boolean;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  topPadding = true,
}: Props) => {
  if (totalPages <= 1) return null;

  const createPages = () => {
    const pages: (number | string)[] = [];

    pages.push(1);
    if (currentPage > 3) pages.push("...");

    for (let p = currentPage - 1; p <= currentPage + 1; p++) {
      if (p > 1 && p < totalPages) pages.push(p);
    }

    if (currentPage < totalPages - 2) pages.push("...");

    if (totalPages > 1) pages.push(totalPages);
    return pages;
  };

  const pages = createPages();

  return (
    <div className={`${topPadding ? "mt-12" : ""} flex items-center justify-center`}>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 hover:bg-gray-200/60 disabled:opacity-40 dark:hover:bg-gray-800/60"
      >
        <span className="text-xl">
          <ChevronLeft />
        </span>
      </button>

      {pages.map((p, idx) =>
        p === "..." ? (
          <span
            key={idx}
            className="text-sm font-medium flex h-10 w-10 items-center justify-center rounded-full text-gray-500 dark:text-gray-400"
          >
            …
          </span>
        ) : (
          <button
            key={idx}
            onClick={() => onPageChange(Number(p))}
            className={
              currentPage === p
                ? "text-sm font-bold flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary"
                : "text-sm font-medium flex h-10 w-10 items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200/60 dark:hover:bg-gray-800/60"
            }
          >
            {p}
          </button>
        )
      )}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 hover:bg-gray-200/60 disabled:opacity-40 dark:hover:bg-gray-800/60"
      >
        <span className="text-xl">
          <ChevronRight />
        </span>
      </button>
    </div>
  );
};
