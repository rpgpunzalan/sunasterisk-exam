import { Icon } from "@iconify/react";
import useSearch from "../hooks/useSearch";
import { useEffect, useState } from "react";

const Header = () => {
  const { searchResults, searchYoutube } = useSearch();
  const [q, setQ] = useState("");
  const handleSearch = async (e) => {
    e.preventDefault();
    searchYoutube(q);
  };

  useEffect(() => {
    console.log
    if (searchResults.length === 0) {
      searchYoutube("");
    }
  }, [searchResults, searchYoutube]);
  return (
    <div className="flex items-center justify-between w-full p-2 px-4">
      <div className="flex items-center gap-1">
        <Icon icon="mdi:youtube" className="text-4xl text-red-500" />
        <span className="text-xl">Premium</span>
        <span>PH</span>
      </div>
      <form onSubmit={handleSearch} className="w-[40vw] bg-white rounded-full flex items-center border">
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
          }}
          type="text"
          placeholder="Search"
          className="w-full outline-none ml-6"
        />
        <button
          type="submit"
          className="bg-[#efefef] rounded-r-full px-4 p-2 items-center justify-center flex hover:cursor-pointer hover:bg-[#eaeaea]"
        >
          <Icon icon="heroicons-outline:search" className="text-2xl" />
        </button>
      </form>
      <div>
        <img src="https://i.pravatar.cc/40?img=20" alt="avatar" className="rounded-full" />
      </div>
    </div>
  );
};

export default Header;
