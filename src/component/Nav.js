import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const Nav = () => {
  const [inputValue, setInputValue] = useState('');
  const navi = useNavigate();
  const { pathname, search } = useLocation();
  const goHome = () => {
    navi('/');
  };
  console.log(pathname, search);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
    navi(`/search?q=${e.target.value}`);
  };
  //   const auth = getAuth();
  //   const provider = new GoogleAuthProvider();

  //   useEffect(() => {
  //     onAuthStateChanged((user) => {
  //       if (user) {
  //         navi('/main');
  //       } else {
  //         navi('/');
  //       }
  //     });
  //   }, []);

  //   const login = () => {
  //   };

  return (
    <Navbar>
      <Logo
        src="https://blog.kakaocdn.net/dn/c5SZ6P/btrbdZ4O6xp/hMYR98lkkoZqpNaHttOAY0/img.jpg"
        onClick={goHome}
      />
      <Input placeholder="search" type="text" inputValue={inputValue} onChange={handleChange} />
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

const Input = styled.input`
  background-color: #333333;
  border: none;
  padding: 5px;
  width: 200px;
  color: white;
`;
