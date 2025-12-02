interface SearchBarInputProps {
  searchText: string;
  handleSearchClick: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBarInput = ({
  searchText,
  handleSearchClick,
  setSearchText,
}: SearchBarInputProps) => {
  return (
    <input
      value={searchText}
      onKeyDown={handleSearchClick}
      onChange={(e) => setSearchText(e.target.value)}
      className="block w-full rounded-2xl border border-gray-200 bg-gray-100  py-2.5 pl-10 pr-4 text-sm text-gray-800  placeholder:text-gray-400 focus:border-b-emerald-300 focus:ring-emerald-400"
      placeholder="dresses, top, etc..."
    />
  );
};

export default SearchBarInput;
