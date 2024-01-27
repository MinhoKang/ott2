import axios from '../api/axios';
import React, { useEffect, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Scrollbar } from 'swiper/modules';

import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Modal from './Modal';

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const baseURL = 'https://image.tmdb.org/t/p/original/';
  const fetchMovieData = async () => {
    const response = await axios.get(fetchUrl);
    console.log(response);
    setMovies(response.data.results);
  };

  const showModal = (movie) => {
    console.log(movie);
    setModal(true);
    setSelectedMovie(movie);
  };

  useEffect(() => {
    fetchMovieData();
  }, []);
  return (
    <div>
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <MovieImgContainer>
            {movies.map((movie, index) => (
              <MovieImg
                src={`${baseURL}${movie.backdrop_path}`}
                key={movie.id}
                onClick={() => showModal(movie)}
              />
            ))}
          </MovieImgContainer>
        </SwiperSlide>
      </Swiper>

      {modal && <Modal {...selectedMovie} setModal={setModal} />}
    </div>
  );
};

export default Row;

const Container = styled.div`
  width: 100px;
  display: flex;
`;
const MovieImgContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px 0 20px 20px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const MovieImg = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 144px;
  margin-right: 10px;
  transform: transform 450ms;
  border-radius: 5px;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;
