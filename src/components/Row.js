import React from 'react'

const imgUrl = "https://image.tmdb.org/t/p/w500/";

const Row = ({ title, arr }) => {

  const Card = ({ img }) => {
    return <img className="card" src={img} alt="img" />
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div>
        {arr.map((item, index) => {
          return <Card key={index} img={`${imgUrl}/${item.poster_path}`} />;
        })}
      </div>
    </div>
  );
};



export {Row};
