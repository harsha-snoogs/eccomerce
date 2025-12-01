import "./App.css";
import SearchPage from "./components/blocks/searchPage";
import NavBar from "./components/blocks/NavBar";
import { useState } from "react";
import Helper from "./common/utils";

function App() {
  const [searchText, setSearchText] = useState<string>("");
  const [api, setApi] = useState<string>(
    Helper.constructApiEndpoint(searchText, 1)
  );

  const handleSetPage = (newPage: number) => {
    const endpoint = Helper.constructApiEndpoint(searchText, newPage);
    setApi(endpoint);
  };
  
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col">
        <NavBar
          searchText={searchText}
          setSearchText={setSearchText}
          setApi={setApi}
        />
        <SearchPage api={api} setPage={handleSetPage} />
      </div>
    </>
  );
}

export default App;
