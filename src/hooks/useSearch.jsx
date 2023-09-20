import React from "react";

const SearchContext = React.createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = React.useState([]);

  const searchYoutube = async (query) => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=25&q=${query}&key=${
        import.meta.env.VITE_APP_YOUTUBE_API_KEY
      }`
    );
    const data = await response.json();
    setSearchResults(data.items);
  };

  return <SearchContext.Provider value={{ searchResults, searchYoutube }}>{children}</SearchContext.Provider>;
};

const useSearch = () => {
  const context = React.useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export default useSearch;
