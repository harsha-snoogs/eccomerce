import type { CardProps } from "../../common/interface";

export default function Card(props: CardProps) {
  return (
    <div className="group relative flex flex-col">
      <div className="relative w-full overflow-hidden rounded bg-gray-200 h-48 sm:h-60 md:h-72">
        <img
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          src={props.image}
          alt={props.title}
        />
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

        <div className="absolute bottom-3 left-0 right-0 hidden md:flex justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none">
          <button className="pointer-events-auto z-10 w-[80%] rounded-full border border-transparent bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-start justify-between">
          <h3 className="text-sm text-gray-800 flex-1">
            <a className="relative z-10" href="#">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {props.title}
            </a>
          </h3>
          <p className="text-sm font-medium text-gray-900  shrink-0 pl-8">
            <span className="text-red-500">${props.price}</span>
            {props.msrp && props.msrp > props.price && (
              <span className="line-through pl-2">${props.msrp}</span>
            )}
          </p>
        </div>
        <button className="mt-3 flex w-full rounded-full border border-transparent bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 md:hidden align-center">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
