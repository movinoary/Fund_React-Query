import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHero = () => {
  return axios.get(`http://localhost:4000/superheroes`);
};

const fetchFriends = () => {
  return axios.get(`http://localhost:4000/friends`);
};

export const ParrallerQueriesPage = () => {
  const { data: superHeroes } = useQuery("super-heroes", fetchSuperHero);
  const { data: friends } = useQuery("friends", fetchFriends);

  return (
    <div>
      <h1>Super Heroes</h1>
      {superHeroes?.data.map(hero => {
        return (
          <div key={hero.id}>
            <div>{hero.name}</div>
          </div>
        );
      })}
      <h1>Super Heroes Friends</h1>
      {friends?.data.map(hero => {
        return (
          <div key={hero.id}>
            <div>{hero.name}</div>
          </div>
        );
      })}
    </div>
  );
};
