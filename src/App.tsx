import "./App.css";
import SearchPage from "./components/blocks/searchPage";
import NavBar from "./components/blocks/NavBar";

function App() {
  return (
    <>
    <div className="relative flex min-h-screen w-full flex-col">
      <NavBar />
      <SearchPage/>
    </div>
    </>
  );
}

export default App;
