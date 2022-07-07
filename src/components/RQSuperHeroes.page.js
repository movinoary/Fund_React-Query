import React from "react";
import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesdata";

export const RQSuperHeroesPage = () => {
  const onSuccess = data => {
    console.log(`Perform side effect after data fetching`, data);
  };

  const onError = error => {
    console.log(`Perform side effect after encountering fetching`, error);
  };

  const { isLoading, data, isError, error, isFetched, refetch } =
    useSuperHeroesData(onSuccess, onError);

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
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      {/* {data.map(heroName => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </>
  );
};
