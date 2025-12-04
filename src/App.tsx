import "./App.css";
import SearchPage from "./components/blocks/searchResultPage";
import NavBar from "./components/blocks/NavBar";
import { useState } from "react";
import Helper from "./common/utils";
import type { SortingOption } from "./common/interface";

function App() {
  const [searchText, setSearchText] = useState<string>("");
  const [sort, setSort] = useState<SortingOption | undefined>(undefined);

  const [api, setApi] = useState<string>(
    Helper.constructApiEndpoint(searchText, 1)
  );

  const handleSetPage = (newPage: number) => {
    const endpoint = Helper.constructApiEndpoint(searchText, newPage, sort);
    setApi(endpoint);
  };

  const handleSetSort = (newSort: SortingOption) => {
    setSort(newSort);
    const endpoint = Helper.constructApiEndpoint(searchText, 1, newSort);
    setApi(endpoint);
  };

  const handleTextSearch = () => {
    const endpoint = Helper.constructApiEndpoint(searchText, 1, sort);
    setApi(endpoint);
  };

  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col">
        <NavBar
          searchText={searchText}
          setSearchText={setSearchText}
          handleTextSearch={handleTextSearch}
        />
        <SearchPage api={api} setSort={handleSetSort} setPage={handleSetPage} />
      </div>
    </>
  );
}

export default App;
