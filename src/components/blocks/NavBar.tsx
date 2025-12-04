import { User, Menu, X, Search, ShoppingCart, Navigation } from "lucide-react";
import { useEffect, useState } from "react";
import React from "react";
import SearchBarInput from "../ui/SearchBarInput";
import type { NavBarProps } from "../../common/interface";



const NavBar = ({ setSearchText, handleTextSearch, searchText }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((s) => !s);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleSearchClick = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    if ("key" in e && e.key !== "Enter") return;
    handleTextSearch();
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50  bg-background-light/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <button
            onClick={toggleMenu}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent text-gray-700  md:hidden hover:bg-gray-200/60"
            aria-label="Toggle Menu"
          >
            {!isMenuOpen ? (
              <Menu height={24} width={24} />
            ) : (
              <X height={24} width={24} />
            )}
          </button>

          <div className="flex items-center gap-2 text-gray-900">
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

          <nav className="hidden md:flex items-center px-8 gap-6">
            <a
              className="text-sm font-medium text-gray-600  hover:text-primary "
              href="#"
            >
              New In
            </a>
            <a
              className="text-sm font-medium text-gray-900 "
              href="#"
            >
              Clothing
            </a>
            <a
              className="text-sm font-medium text-gray-600  hover:text-primary"
              href="#"
            >
              Accessories
            </a>
            <a
              className="text-sm font-medium text-gray-600 hover:text-primary "
              href="#"
            >
              Sale
            </a>
          </nav>

          <div className="hidden md:flex flex-1 px-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <SearchBarInput
                searchText={searchText}
                handleSearchClick={handleSearchClick}
                setSearchText={setSearchText}
              />
              <Navigation
                onClick={handleSearchClick}
                className="absolute cursor-pointer right-3 top-7/12 h-4 w-6 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent hover:bg-gray-200/60"
              aria-label="User Account"
            >
              <User height={20} />
            </button>
            <button
              className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent hover:bg-gray-200/60 "
              aria-label="Shopping Bag"
            >
              <ShoppingCart height={20} />
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-white"></span>
            </button>
          </div>
        </div>

        <div className="md:hidden px-4 py-2 border-t border-gray-200/50 ">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <SearchBarInput
              searchText={searchText}
              handleSearchClick={handleSearchClick}
              setSearchText={setSearchText}
            />
            <Navigation
              onClick={handleSearchClick}
              className="absolute cursor-pointer right-3 top-7/12 h-4 w-6 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 md:hidden"
          aria-hidden="true"
          onClick={toggleMenu}
        />
      )}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Main Menu"
        className={`fixed inset-y-0 left-0 z-60 w-64 transform  bg-white p-4 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 ">
            Menu
          </h3>
          <button onClick={toggleMenu} aria-label="Close Menu">
            <X
              height={24}
              width={24}
              className="text-gray-700  cursor-pointer"
            />
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          <a
            className="text-base font-medium text-gray-900  "
            href="#"
            onClick={toggleMenu}
          >
            New In
          </a>
          <a
            className="text-base font-medium text-gray-900  hover:text-primary "
            href="#"
            onClick={toggleMenu}
          >
            Clothing
          </a>
          <a
            className="text-base font-medium text-gray-900  hover:text-primary "
            href="#"
            onClick={toggleMenu}
          >
            Accessories
          </a>
          <a
            className="text-base font-medium text-gray-900  hover:text-primary "
            href="#"
            onClick={toggleMenu}
          >
            Sale
          </a>
        </nav>
      </aside>
    </>
  );
};

export default NavBar;
