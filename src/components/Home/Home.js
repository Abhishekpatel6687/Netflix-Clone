import React, { useEffect, useState } from "react";
import "./Home.scss";
import cover from "../../cover.jpg";
import axios from "axios"
import {Link} from "react-router-dom"
const apikey = "5e92b9540ba66a721f8ed126c0dca895";
const url = "https://api.themoviedb.org/3"
const imgUrl = "https://image.tmdb.org/t/p/w500/"
const upcoming = "upcoming"
const nowPlaying = "now_playing";
const popular = "popular"
const topRated = "top_rated";


const Card = ({ img }) => {
  return <img className="card" src={img} alt="cover" />;
};
// useEffect(()=>{
//       <h2>{title}</h2>
//     fetch("https://api.themoviedb.org/3/movie/550?api_key=5e92b9540ba66a721f8ed126c0dca895").then(()=>{

//     })
// })
const Row = ({ title, arr = [] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>

      <div>
    
        {arr.map((item,index) => {
          return (
                  <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>
          )
        })}
      </div>
    </div>
  );
};
const Home = () => {

    const [upcomingMovies, setupcomingMovies] = useState([])
    const [nowPlayingMovies, setnowPlayingMovies] = useState([])
    const [PopularMovies, setPopularMovies] = useState([])
    const [TopRatedMovies, setTopRatedMovies] = useState([])
    const [genre, setGenre] = useState([])

    useEffect(() => {
     const fetchUpcoming = async() => {
      const {data: {results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`)
    //   console.log(`${url}/movie/${upcoming}?api_key=${apikey}`)
    //   console.log(results)
      setupcomingMovies(results)
    };
    
     const fetchNowPlaying = async() => {
      const {data: {results}} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}`)
      setnowPlayingMovies(results)
    };

     const fetchPopular = async() => {
      const {data: {results}} = await axios.get(`${url}/movie/${popular}?api_key=${apikey}`)
      setPopularMovies(results)
    };
    
     const fetchTopRated = async() => {
      const {data: {results}} = await axios.get(`${url}/movie/${topRated}?api_key=${apikey}`)
      setTopRatedMovies(results)
    };

     const getAllGener = async() => {
      
// https://api.themoviedb.org/3/genre/movie/list
// "5e92b9540ba66a721f8ed126c0dca895";
// --url 'https://api.themoviedb.org/3/genre/movie/list?language=en' \
      const {data: {genres}} = await axios.get(`${url}/genre/movie/list?api_key=${apikey}`)
      setGenre(genres)
      console.log(genres)
    };
    //  const getGenerTV = async() => {
    //   // --url 'https://api.themoviedb.org/3/genre/tv/list?language=en' \
    //   const {data: {results}} = await axios.get(`${url}/genre/${topRated}?api_key=${apikey}`)
    //   setTopRatedMovies(results)
    // };
    fetchUpcoming()
    fetchNowPlaying()
    fetchPopular()
    fetchTopRated()
    getAllGener()
    // getGenerTV()
},[])
// console.log(upcomingMovies)

  return (
    <section className="home">
      <div className="banner">fuhgfjh</div>

      <Row title={"Upcoming"} arr={upcomingMovies} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />
      <Row title={"Popular"} arr={PopularMovies} />
      <Row title={"Top Rated"} arr={TopRatedMovies} />
      {/* <Row title={"Genres"} arr={genre} /> */}

     <div className="genreBox">
     {
        genre.map((item) => {
          return( 
             <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link> 
          )
        })
      }
     </div>
    </section>
  );
};

export default Home;
