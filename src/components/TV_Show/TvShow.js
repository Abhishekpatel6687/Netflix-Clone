import axios from "axios";
import React, { useEffect, useState } from "react";

const apikey = "5e92b9540ba66a721f8ed126c0dca895";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/w500/";
const AiringToday = "airing_today";
const OnTheAir = "on_the_air";
const Popular = "popular";
const TopRated = "top_rated";

function Card({ img }) {
    return <img className="card" src={img} alt="img" />;
  };

  function Row({ title, arr }) {
    return (
      <div className="row">
        <h2>{title}</h2>

        <div>
          {arr.map((item, index) => {
            return <Card key={index} img={`${imgUrl}/${item.backdrop_path}`} />;
          })}
        </div>
      </div>
    );
  };
const TvShow = () => {
  const [AiringTodayTV, setAiringTodayTV] = useState([]);
  const [OnTheAirTV, setOnTheAirTV] = useState([]);
  const [PopularTV, setPopularTV] = useState([]);
  const [TopRatedTV, setTopRatedTV] = useState([]);

  useEffect(() => {
    const fetchAiringToday = async () => {
      await axios
        .get(`${url}/tv/${AiringToday}?api_key=${apikey}`)
        .then((item) => {
          setAiringTodayTV(item.data.results);
        });
    };

    const fetchOnTheAir = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/tv/${OnTheAir}?api_key=${apikey}&page=28`);
      setOnTheAirTV(results);
    };

    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/tv/${Popular}?api_key=${apikey}&page=7`);
      setPopularTV(results);
    };

    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/tv/${TopRated}?api_key=${apikey}`);
      setTopRatedTV(results);
    };

    fetchAiringToday();
    fetchOnTheAir();
    fetchPopular();
    fetchTopRated();
  }, []);
  //    console.log(PopularTV);

  return (
    <div>
      <Row title="AiringToday" arr={AiringTodayTV} />
      <Row title="OnTheAir" arr={OnTheAirTV} />
      <Row title="Popular" arr={PopularTV} />
      <Row title="TopRated" arr={TopRatedTV} />
    </div>
  );
};

export default TvShow;

// import React, { useEffect, useState } from "react";

// const apikey = "5e92b9540ba66a721f8ed126c0dca895";
// const url = "https://api.themoviedb.org/3";
// const imgUrl = "https://image.tmdb.org/t/p/w500/";
// // const AiringToday = "airing_today";
// // const OnTheAir = "on_the_air";
// const Popular = "popular";
// // const TopRated = "top_rated";

// const TvShow = () => {
//   const [PopularTV, setPopularTV] = useState([]);

//   function Card({ img }) {
//     return <img src={img} alt="img" />;
//   }

//   const Row = ({ title, arr }) => {
//     return (
//       <div>
//         {arr.map((item) => {
//           return (
//             <div key={item.id}>
//               <Card img={`${imgUrl}/${item.backdrop_path}`} />
//             </div>
//           );
//         })}
//       </div>
//     );
//   };
//   useEffect(() => {
//     fetch(`${url}/tv/${Popular}?api_key=${apikey}`).then((result) => {
//        console.log(result.url)
//       setPopularTV(result);
//     });
//   }, []);

//   console.log(PopularTV);

//   return (
//     <>
//       <Row title="Popular" arr={PopularTV} />
//     </>
//   );
// };

// export default TvShow;
