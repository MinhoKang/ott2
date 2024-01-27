import React from 'react';
import styled from 'styled-components';

const Modal = ({
  setModal,
  adult,
  origianl_title,
  backdrop_path,
  vote_average,
  overview,
  release_date,
  title,
}) => {
  const baseURL = 'https://image.tmdb.org/t/p/original/';

  return (
    <Container>
      <SelectedMovieImgContainer>
        <SelectedMovieImg src={`${baseURL}${backdrop_path}`} />
        <CloseBtn onClick={() => setModal(false)}>X</CloseBtn>

        <TextContainer>
          <Text fontWeight="bold" fontSize="20px">
            {release_date}
          </Text>
          <Text fontWeight="bold" fontSize="30px">
            {origianl_title ? origianl_title : title}
          </Text>
          <Text fontSize="20px">rate: {vote_average}</Text>
          <Text fontSize="20px">{overview}</Text>
          <Text fontSize="18px">{adult ? 'adult' : 'not adult'}</Text>
        </TextContainer>
      </SelectedMovieImgContainer>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  z-index: 1000;
  position: fixed;
  display: flex;
  justify-content: center;
  inset: 0;
  background-color: rgba(30, 30, 32, 0.9);
  height: 100vh;
`;

const SelectedMovieImgContainer = styled.div`
  max-width: 800px;
  position: relative;
`;

const SelectedMovieImg = styled.img`
  width: 100%;
`;

const TextContainer = styled.div`
  padding: 20px;
`;

const Text = styled.p`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
`;

const CloseBtn = styled.div`
  position: absolute;
  z-index: 2000;
  right: 20px;
  top: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;
