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

  return <div>ParrallerQueries.page</div>;
};
