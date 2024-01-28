import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MovieDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [movie, setMoive] = useState(null);
  const fetchMovieDetail = async () => {
    const response = await axios.get(`now_playing`);
    console.log(response);
    setMoive(response);
    console.log(movie);
  };
  useEffect(() => {
    fetchMovieDetail();
  }, [id]);
  return <div>{id}</div>;
};

export default MovieDetail;
