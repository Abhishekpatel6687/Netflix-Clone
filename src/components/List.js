import React from 'react'
// const apikey = "5e92b9540ba66a721f8ed126c0dca895";
// const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/w500/";
const List = ({searchResults}) => {

  const Card = ({ img }) => {
    return <img className="card" src={img} alt="img" />;
  };

  return (
    <div>
      {searchResults.map((item, index) => {
          return <Card key={index} img={`${imgUrl}/${item.poster_path}`} />;
        })}
    </div>
  )
}

export default List
