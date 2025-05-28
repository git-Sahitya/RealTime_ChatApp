import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="px-6 py-4">
      <form action="">
        <div className="flex space-x-3">
          <label className="flex  items-center gap-2 w-[80%]">
            <input type="text" placeholder="Type here" className="input" />
          </label>
          <button>
           <IoSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
