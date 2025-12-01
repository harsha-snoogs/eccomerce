import { ShoppingBag, User, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import Helper from "../../common/utils";
import React from "react";
import SearchBarInput from "../ui/SearchBarInput";

interface NavBarProps {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  setApi: React.Dispatch<React.SetStateAction<string>>;
  searchText: string;
}
const NavBar = ({ setSearchText, setApi, searchText }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearchClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const endpoint = Helper.constructApiEndpoint(searchText, 1);
    setApi(endpoint);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <button
            onClick={toggleMenu}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent text-gray-700 dark:text-gray-300 md:hidden hover:bg-gray-200/60 dark:hover:bg-gray-800/60"
            aria-label="Toggle Menu"
          >
            {!isMenuOpen ? (
              <Menu height={24} width={24} />
            ) : (
              <X height={24} width={24} />
            )}
          </button>

          <div className="flex items-center gap-2 text-gray-900 dark:text-white">
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                fill="currentColor"
              ></path>
            </svg>
            <h2 className="text-xl font-bold tracking-tight">Brand</h2>
          </div>

          <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
            <a
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              href="#"
            >
              New In
            </a>
            <a
              className="text-sm font-medium text-gray-900 dark:text-white"
              href="#"
            >
              Clothing
            </a>
            <a
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              href="#"
            >
              Accessories
            </a>
            <a
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              href="#"
            >
              Sale
            </a>
          </nav>

          <div className="hidden md:flex flex-1 justify-center px-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <SearchBarInput searchText={searchText} handleSearchClick={handleSearchClick} setSearchText={setSearchText} />
            </div>
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent hover:bg-gray-200/60 dark:hover:bg-gray-800/60"
              aria-label="User Account"
            >
              <User height={20} />
            </button>
            <button
              className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent hover:bg-gray-200/60 dark:hover:bg-gray-800/60"
              aria-label="Shopping Bag"
            >
              <ShoppingBag height={20} />
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                2
              </span>
            </button>
          </div>
        </div>
        <div className="md:hidden px-4 py-2 border-t border-gray-200/50 dark:border-gray-800/50">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <SearchBarInput searchText={searchText} handleSearchClick={handleSearchClick} setSearchText={setSearchText} />
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-background-light dark:bg-background-dark p-4 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Menu
          </h3>
          <button onClick={toggleMenu} aria-label="Close Menu">
            <X
              height={24}
              width={24}
              className="text-gray-700 dark:text-gray-300"
            />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          <a
            className="text-base font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
            href="#"
            onClick={toggleMenu}
          >
            New In
          </a>
          <a
            className="text-base font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
            href="#"
            onClick={toggleMenu}
          >
            Clothing
          </a>
          <a
            className="text-base font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
            href="#"
            onClick={toggleMenu}
          >
            Accessories
          </a>
          <a
            className="text-base font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
            href="#"
            onClick={toggleMenu}
          >
            Sale
          </a>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
