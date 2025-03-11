import { FC, InputHTMLAttributes } from "react";
import { IoSearch } from "react-icons/io5";

type SearchBarProps = {} & InputHTMLAttributes<HTMLInputElement>;

const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <div className="relative">
      <input
        {...props}
        className="py-1 px-2 border-2 border-black rounded-2xl w-full"
        type="text"
        placeholder="Search"
      />
      <IoSearch className="absolute top-1/3 right-6 font-bold text-gray-700" />
    </div>
  );
};

export default SearchBar;
