import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import axios from "axios";
import List from "../List";

const apikey = "5e92b9540ba66a721f8ed126c0dca895";
const url = "https://api.themoviedb.org/3";

const Header = () => {
  const [searchText, setSearchText] = useState(""); // State to store the search text
  const [searchResults, setSearchResults] = useState([]);

console.log(searchResults)
  useEffect(() => {
    const fetchSearch = async () => {
      if (searchText.trim() === "") {
        setSearchResults([]); // Clear the results if the search text is empty
        return;
      }

      try {
        const { data: { results } } = await axios.get(`${url}/search/movie?api_key=${apikey}&query=${searchText}`);
        setSearchResults(results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearch();
  }, [searchText]);

  const updateFilterValue = (e) => {
    const value = e.target.value;
    setSearchText(value); // Update the search text in the state
  };

  const filterResults = () => {
    // Define your filter logic here. For example, filtering by movie title.
    const filteredResults = searchResults.filter((result) =>
      result.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <nav className="header">
      <img src="/Images/logo.png" alt="logo" />

      <div>
        <Link to="/tvShows">TV Shows</Link>
        <Link to="/">Movies</Link>
        <Link to="/tvShows">Recently Added</Link>
        <Link to="/tvShows">My List</Link>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="text" value={searchText} onChange={updateFilterValue} />
        <button onClick={filterResults}>
          <ImSearch />
        </button>
      </form>
      <List searchResults={searchResults} />
    </nav>
  );
};

export default Header;
