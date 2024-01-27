import axios from '../../api/axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import MovieCard from '../../component/MovieCard';

const Search = () => {
  const [query, setQuery] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const baseURL = 'https://image.tmdb.org/t/p/original/';
  const searchUrl = `https://api.themoviedb.org/3/search/movie?query=`;
  const fetchSearchMovie = async () => {
    let searchQeury = query.get('q') || '';
    const response = await axios.get(searchUrl + searchQeury);
    setSearchedMovies(response.data.results);
    console.log(searchedMovies);
  };
  const test = (e) => {
    console.log(e.target);
  };

  useEffect(() => {
    fetchSearchMovie();
  }, [query]);
  // console.log(searchQeury);
  return (
    <Container>
      {searchedMovies.map((movie, index) => (
        <ImgContainer key={index}>
          {/* <Img src={`${baseURL}${movie.backdrop_path}`} alt="" onClick={test} />
          <p>{movie.title}</p> */}
          <MovieCard item={movie} index={index} />
        </ImgContainer>
      ))}
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const ImgContainer = styled.div``;

const Img = styled.img`
  width: 100%;
`;
