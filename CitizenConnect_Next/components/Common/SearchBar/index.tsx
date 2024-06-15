import type { FC } from "react";

const SearchBar: FC = () => {
  return (
    <form className="max-w-md w-[320px] rounded-[8px]">
      <div className="relative rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto  text-custom-gray left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Recherche par mot clé"
          className="w-full rounded-[8px] py-2 placeholder:text-sm pl-12 pr-4 text-custom-secondary z-20 border border-custom-gray outline-none bg-white focus:bg-white shadow-sm shadow-slate-100 focus:border-custom-blue"
        />
      </div>
    </form>
  );
};

export default SearchBar;
