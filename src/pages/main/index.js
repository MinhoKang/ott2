import React from 'react';
import Banner from '../../component/Banner';
import Row from '../../component/Row';
import requests from '../../api/requests';
import Catrgory from '../../component/Catrgory';

const MainPage = () => {
  return (
    <div>
      <Banner />
      <Catrgory />
      <Row title="인기 있는 영화" fetchUrl={requests.Popular} />
      <Row title="평점 좋은 영화" fetchUrl={requests.TopRated} />
      <Row title="공개 예정 영화" fetchUrl={requests.UpComing} />
      <Row title="인기 있는 TV 프로그램" fetchUrl={requests.TvPopular} />
      <Row title="평점 좋은 TV 프로그램" fetchUrl={requests.TvTopRated} />
    </div>
  );
};

export default MainPage;
