import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery("super-heroes", fetchSuperHeros);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  console.log(data);

  return (
    <>
      <h2>RQSuperHerosPage</h2>
      {data?.data.map(hero => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
