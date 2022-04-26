import React from 'react';
/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import styled from '@emotion/styled';


function Card({src, band, title, date}) {

  const Figure = styled.figure`
    padding: 1rem;
    border: 1px solid darkgrey;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 2px 2px 4px grey;
    margin: 1rem;
  `

  return (
    <Figure>
      <img src={src} alt={title} css={css`
        width: 15rem;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        border: 1px solid darkgrey;
        `}/>
      <figcaption css={css`
        width: 15rem;
        padding-top: 1rem;
        font-size: 1rem;
        border-top: 1px solid darkgrey;
        text-align: left;`}>{band} : their new album '{title}' was released in {date}.</figcaption>
    </Figure>
  )
}

export default Card;