import React from 'react';
import styled from 'styled-components';

const Catrgory = () => {
  const brandList = [
    {
      name: 'Disney',
      imgLink: './images/disney.png',
      video: './video/disney.mp4',
    },
    {
      name: 'Marvel',
      imgLink: './images/marvel.png',
      video: './video/marvel.mp4',
    },
    {
      name: 'National Geographic',
      imgLink: './images/pixar.png',
      video: './video/ng.mp4',
    },
    {
      name: 'Pixar',
      imgLink: './images/starwars.png',
      video: './video/pixar.mp4',
    },
  ];
  return (
    <Container>
      {brandList.map((item, index) => (
        <Wrap key={index}>
          <BrandImg src={item.imgLink} />
          <Video>
            <source src={item.video} />
          </Video>
        </Wrap>
      ))}
    </Container>
  );
};

export default Catrgory;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Wrap = styled.div`
  width: 150px;
  border: 2px solid white;
  border-radius: 15px;
  transition: all 0.5s;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    /* background-color: #181b28; */
    video {
      opacity: 1;
    }
  }
`;
const BrandImg = styled.img`
  width: 100%;
  /* object-fit: cover; */
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  left: 0;
  border-radius: 15px;
`;
