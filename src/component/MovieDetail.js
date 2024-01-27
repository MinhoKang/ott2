import axios from '../api/axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const MovieDetail = () => {
  const { id } = useParams();
  const fetchMovieDetail = async () => {
    const response = await axios.get(`movie/${id}`);
    console.log(response);
    
  };
  useEffect(() => {
    fetchMovieDetail();
  }, []);
  return <div>{id}</div>;
};

export default MovieDetail;
