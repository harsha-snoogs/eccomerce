
interface SearchBarInputProps {
  searchText: string;
  handleSearchClick: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const  SearchBarInput = ({ searchText, handleSearchClick, setSearchText }: SearchBarInputProps) => {
  return (
    <input
      value={searchText}
      onKeyDown={handleSearchClick}
      onChange={(e) => setSearchText(e.target.value)}
      className="block w-full rounded-full border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900/50 py-2.5 pl-10 pr-4 text-sm text-gray-800 dark:text-gray-200 placeholder:text-gray-400 focus:border-primary focus:ring-primary"
      placeholder="Search for products..."
    />
  );
}

export default SearchBarInput;
