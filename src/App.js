import styled from 'styled-components';
import './App.css';
import Nav from './component/Nav';
import Banner from './component/Banner';
import { Routes, Route } from 'react-router';
import MainPage from './pages/main';
import MovieDetail from './pages/detail';
import Login from './pages/login';
import Search from './pages/search';
import { useEffect, useState } from 'react';

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  // useEffect(() => {}, [authenticate]);
  return (
    <Background>
      <Nav />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Background>
  );
}

export default App;

const Background = styled.div`
  background-color: black;
  height: 100vh;
`;
