import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetched, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeros,
    {
      enabled: false,
    }
  );

  console.log({ isLoading, isFetched });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHerosPage</h2>
      <button onClick={refetch}>Fecth Heroes</button>
      {data?.data.map(hero => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
