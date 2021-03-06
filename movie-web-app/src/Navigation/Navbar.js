import React, { useState } from "react";

//All the svg files
import logo from "./../assets/logo.svg";
import Home from "./../assets/home-solid.svg";
import Movies from "./../assets/movies.svg";
import TV from "./../assets/tv3.svg";
import WatchListIcon from "./../assets/WatchList.svg";
import FavoriteIcon from "./../assets/FavoriteNavbar.svg";
import Login from "./../assets/login.svg";
import Logout from "./../assets/logout.svg";

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "./../userAccount";

const Container = styled.div`
  position: fixed;
  z-index: 12;
  .active {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.25);

  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.div`
  width: 2rem;
  img {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 8px 32px 0 rgba(61, 61, 63, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  padding: 2rem 0;
  position: absolute;
  top: 6rem;
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  height: calc(24px + 2rem);
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  &:hover {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

// const Profile = styled.div`
//   width: ${(props) => (props.clicked ? "14rem" : "3rem")};
//   height: 3rem;
//   padding: 0.5rem 1rem;
//   /* border: 2px solid var(--white); */
//   border-radius: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-left: ${(props) => (props.clicked ? "9rem" : "0")};
//   background-color: rgba(0, 0, 0, 0.25);
//   box-shadow: 0 8px 32px 0 rgba(61, 61, 63, 0.37);
//   backdrop-filter: blur(7.5px);
//   -webkit-backdrop-filter: blur(7.5px);

//   transition: all 0.3s ease;
//   img {
//     width: 3rem;
//     height: 2.5rem;
//     border-radius: 50%;
//     cursor: pointer;
//     &:hover {
//       border: 2px solid var(--grey);
//       padding: 2px;
//     }
//   }
// `;

// const Details = styled.div`
//   display: ${(props) => (props.clicked ? "flex" : "none")};
//   justify-content: space-between;
//   align-items: center;
// `;

// const Name = styled.div`
//   padding: 0 1.5rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   h4 {
//     display: inline-block;
//   }
//   a {
//     font-size: 0.8rem;
//     text-decoration: none;
//     color: var(--grey);
//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const Logout = styled.button`
//   border: none;
//   width: 2rem;
//   height: 2rem;
//   background-color: transparent;
//   img {
//     width: 100%;
//     height: auto;
//     filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
//       brightness(100%) contrast(126%);
//     transition: all 0.3s ease;
//     &:hover {
//       border: none;
//       padding: 0;
//       opacity: 0.5;
//     }
//   }
// `;

const Navbar = () => {
  let user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const logOutUser = () => {
    dispatch(clearUser());
  };

  return (
    <Container>
      <Button clicked={click} onClick={() => handleClick()}>
        Click
      </Button>
      <SidebarContainer>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <SlickBar clicked={click}>
          <Item onClick={() => setClick(false)} end={+true} to="/">
            <img src={Home} alt="Home" />
            <Text clicked={click}>Home</Text>
          </Item>
          <Item onClick={() => setClick(false)} to="/movie">
            <img src={Movies} alt="Movies" />
            <Text clicked={click}>Movies</Text>
          </Item>
          <Item onClick={() => setClick(false)} to="/tv">
            <img src={TV} alt="TV" />
            <Text clicked={click}>TV Series</Text>
          </Item>
          {user.data && (
            <Item onClick={() => setClick(false)} to="/favorite">
              <img src={FavoriteIcon} alt="Favorite" />
              <Text clicked={click}>Favorite Shows</Text>
            </Item>
          )}
          {user.data && (
            <Item onClick={() => setClick(false)} to="/watch-list">
              <img src={WatchListIcon} alt="WatchList" />
              <Text clicked={click}>Watch List</Text>
            </Item>
          )}
          {user.data == null && (
            <Item onClick={() => setClick(false)} to="/login">
              <img src={Login} alt="Log in" />
              <Text clicked={click}>Log In</Text>
            </Item>
          )}
          {user.data && (
            <Item onClick={() => logOutUser()} to="/login">
              <img src={Logout} alt="Log out" />
              <Text clicked={click}>Log Out</Text>
            </Item>
          )}
        </SlickBar>
      </SidebarContainer>
    </Container>
  );
};

export default Navbar;
