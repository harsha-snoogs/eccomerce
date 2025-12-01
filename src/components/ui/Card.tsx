import type { CardProps } from "../../common/interface";

export default function Card(props: CardProps) {
  return (
    <div className="max-w-xs bg-white rounded-xl shadow-lg group overflow-hidden">
      <div className="overflow-hidden">
        <img
          alt="Placeholder"
          src= {props.image ?? "https://via.placeholder.com/400x300"}

          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold">Smart Watch</h2>

        <p className="text-gray-500 text-sm mt-1">
         {props.title}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold">{props.price}</span>
          <button className="px-4 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
