import React from 'react';
/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import styled from '@emotion/styled';


function Header({src, alt, title}) {

  const Nav = styled.nav`
    border: 1px solid grey;
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem;
    background-color: lightgrey;
  `
  const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
  `
  const Li = styled.li`
    list-style: none;
  `
  const H1 = styled.h1`
    text-align: center;
  `

  return (
    <>
      <Nav>
        <Ul>
          <Li>
            Home
          </Li>
          <Li>
            Actus
          </Li>
          <Li>
            Sorties
          </Li>
          <Li>
            Concerts
          </Li>
        </Ul>
      </Nav>
      <H1>Welcome !</H1>
    </>
  )
}

export default Header;