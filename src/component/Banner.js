import axios from '../api/axios';
// axios를 사용할 때 주소 설정 하기
import React, { useEffect, useState } from 'react';
import requests from '../api/requests';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const baseURL = 'https://image.tmdb.org/t/p/original/';

  const fetchData = async () => {
    const response = await axios.get(requests.NowPlaying);
    console.log(response);
    setMovie(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Swiper>
        <ImgContainer>
          {movie?.results?.map((item, index) => (
            <SwiperSlide>
              <MovieImg src={`${baseURL}${item.backdrop_path}`} key={index} />
              <MovieInfo>
                <MovieText>{item.original_title}</MovieText>
                <MovieText>{item.video ? <button>Play</button> : ''}</MovieText>
                <MovieText>{item.overview}</MovieText>
              </MovieInfo>
            </SwiperSlide>
          ))}
        </ImgContainer>
      </Swiper>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
`;

const MovieImg = styled.img.attrs({ alt: '영화 이미지' })`
  max-width: 1500px;
  object-fit: contain;
`;

const MovieInfo = styled.div`
  position: relative;
  left: 10px;
  bottom: 150px;
`;

const MovieText = styled.p``;
