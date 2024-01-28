import axios from '../../api/axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import requests from '../../api/requests';
import styled from 'styled-components';

const MovieDetail = () => {
  const baseURL = 'https://image.tmdb.org/t/p/original/';
  const { id } = useParams();

  const [movie, setMoive] = useState([]);
  const fetchMovieDetail = async () => {
    const response = await axios.get(`movie/${id}`);
    console.log(response);
    setMoive(response.data);
    console.log(movie);
  };
  const movieGenre = movie.genres;
  console.log(movieGenre);
  useEffect(() => {
    fetchMovieDetail();
  }, []);
  return (
    <Container>
      <ImgContainer>
        <Img src={`${baseURL}${movie.backdrop_path}`} alt="" />
      </ImgContainer>
      <div>
        <h2>{movie.title}</h2>
        <p>Release Date: {movie.release_date}</p>
        <p>Running Time: {movie.runtime} minute</p>
        <p>
          Genre:
          {movieGenre?.map((genre) => (
            <span key={genre.id}> {genre.name},</span>
          ))}
        </p>

        <p>{movie.overview}</p>
        <button>Watch Now</button>
      </div>
    </Container>
  );
};

export default MovieDetail;

const Container = styled.div`
  display: flex;
`;

const ImgContainer = styled.div`
  max-width: 900px;
  min-width: 700px;
`;

const Img = styled.img`
  width: 100%;
`;
