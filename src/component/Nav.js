import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Nav = () => {
  const navi = useNavigate();
  const goHome = () => {
    navi('/');
  };
  return (
    <Navbar>
      <Logo
        src="https://blog.kakaocdn.net/dn/c5SZ6P/btrbdZ4O6xp/hMYR98lkkoZqpNaHttOAY0/img.jpg"
        onClick={goHome}
      />
      <Login>로그인</Login>
    </Navbar>
  );
};

export default Nav;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 130px;
`;

const Login = styled.div`
  color: white;
`;
