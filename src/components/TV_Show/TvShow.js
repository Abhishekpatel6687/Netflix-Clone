import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "../Row";

const apikey = "5e92b9540ba66a721f8ed126c0dca895";
const url = "https://api.themoviedb.org/3";
// const imgUrl = "https://image.tmdb.org/t/p/w500/";
const AiringToday = "airing_today";
const OnTheAir = "on_the_air";
const Popular = "popular";
const TopRated = "top_rated";


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