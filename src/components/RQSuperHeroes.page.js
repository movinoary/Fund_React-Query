import React from "react";
import { useSuperHeroData } from "../hooks/useSuperHeroesdata";

export const RQSuperHeroesPage = () => {
  const onSuccess = data => {
    console.log(`Perform side effect after data fetching`, data);
  };

  const onError = error => {
    console.log(`Perform side effect after encountering fetching`, error);
  };

  const { isLoading, data, isError, error, isFetched, refetch } =
    useSuperHeroData(onSuccess, onError);

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
      {/* {data?.data.map(hero => {
        return <div key={hero.name}>{hero.name}</div>;
      })} */}
      {data.map(heroName => {
        return <div key={heroName}>{heroName}</div>;
      })}
    </>
  );
};
