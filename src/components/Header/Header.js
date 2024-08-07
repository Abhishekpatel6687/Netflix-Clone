import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { CgMenu, CgClose } from "react-icons/cg";
import axios from "axios";
import { Row } from "../Row";

const apikey = "5e92b9540ba66a721f8ed126c0dca895";
const url = "https://api.themoviedb.org/3";

const Header = () => {
  const navigate = useNavigate();
  const onHomeBannerHandler = () => {
    navigate("/");
  };
  const [searchText, setSearchText] = useState(""); // State to store the search text
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const fetchSearch = async () => {
      if (searchText.trim() === "") {
        setSearchResults([]); // Clear the results if the search text is empty
        return;
      }

      try {
        const {
          data: { results },
        } = await axios.get(
          `${url}/search/movie?api_key=${apikey}&query=${searchText}`
        );
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

  // Define your filter logic here. For example, filtering by movie title.
  const filterResults = () => {
    const filteredResults = searchResults.filter((result) =>
      result.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <>
      <nav className="header">
        <img onClick={onHomeBannerHandler} src="/Images/logo.png" alt="logo" />

        <div className={isOpen ? "navRow" : "navColumn"} >
          <Link to="/home">Movies</Link>
          <Link to="/tvShows">TV Shows</Link>
          <Link to="">Recently Added</Link>
          <Link to="/tvShows">My List</Link>
        </div>
        <form className="search" onSubmit={(e) => e.preventDefault()}>
          <input style={{paddingLeft:'10px'}}
            type="text"
            name="text"
            value={searchText}
            onChange={updateFilterValue}
            placeholder="Search"
          />

          <ImSearch className="icon1" onClick={filterResults} />

          { isOpen ?  <CgMenu className="iconOpen"
            onClick={() => setIsOpen(!isOpen)}
          />:
          <CgClose
            className="iconClose"
            onClick={() => setIsOpen(!isOpen)}
          />}
        </form>
      </nav>
      {searchText ? <Row title={"Search List"} arr={searchResults} /> : ""}
    </>
  );
};

export default Header;
