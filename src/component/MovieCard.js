import axios from '../api/axios';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import requests from '../api/requests';

const MovieCard = ({ item, index }) => {
  const baseURL = 'https://image.tmdb.org/t/p/original/';
  const navi = useNavigate();
  const showDetail = (e) => {
    console.log(e.target.value);
    navi(`/movie/${item.id}`);
  };
  console.log(item);

  return (
    <div onClick={showDetail}>
      <Img src={`${baseURL}${item.backdrop_path}`} alt="" />
      <div>{item?.title}</div>
    </div>
  );
};

export default MovieCard;
const Img = styled.img`
  width: 100%;
`;
