import React, { useEffect, useState } from "react";
import "./Home.scss";
import cover from "../../cover.jpg";
import axios from "axios"

const apikey = "5e92b9540ba66a721f8ed126c0dca895";
const url = "https://api.themoviedb.org/3"
const upcoming = "upcoming"
const Card = ({ img }) => {
  return <img className="card" src={img} alt="cover" />;
};
// useEffect(()=>{
//       <h2>{title}</h2>
//     fetch("https://api.themoviedb.org/3/movie/550?api_key=5e92b9540ba66a721f8ed126c0dca895").then(()=>{

//     })
// })
const Row = ({ title, arr = [{
    img:{cover},
},
{
    img:{cover}, 
},
{
    img:{cover}, 
},
{
    img:{cover}, 
},
{
    img:{cover}, 
},
] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>

      <div>
    
        {arr.map((item,index) => {
          return (
            <Card key={index} img={cover} />
          )
        })}
      </div>
    </div>
  );
};
const Home = () => {

    const [upcomingMovies, setupcomingMovies] = useState([])
    useEffect(() => {
     const fetchUpcoming = async() => {
      const {data: {results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`)
    //   console.log(`${url}/movie/${upcoming}?api_key=${apikey}`)
    //   console.log(results)
      setupcomingMovies(results)
    };
    
    fetchUpcoming()
},[])
console.log(upcomingMovies)
  return (
    <section className="home">
      <div className="banner">fuhgfjh</div>

      <Row title={"Popular on Netflix"} />
      <Row title={"Recenty add "} />
      <Row title={"Histioy"} />
      <Row title={"Popular on Netflix"} />
      <Row title={"Popular on Netflix"} />
      <Row title={"Popular on Netflix"} />
    </section>
  );
};

export default Home;
