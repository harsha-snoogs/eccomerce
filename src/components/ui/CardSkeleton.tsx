const CardSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col">
      <div className="w-full aspect-3/4 rounded bg-gray-200"></div>
      <div className="mt-4 flex flex-col gap-2">
        <div className="h-4 w-2/3 rounded bg-gray-200"></div>
        <div className="h-4 w-1/3 rounded bg-gray-200"></div>
        <div className="h-3 w-5/6 rounded bg-gray-200"></div>

        <div className="h-9 w-full rounded-full bg-gray-200 md:hidden mt-2"></div>
      </div>
    </div>
  );
};
export default CardSkeleton;