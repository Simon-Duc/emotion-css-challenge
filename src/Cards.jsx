import Card from "./Card";
import { useState } from "react";
import styled from '@emotion/styled';

function Cards() {

  const [albumList, setAlbumList] = useState(
    [
      {
        id: 1,
        src: "./src/Leo_Blomov_Carpe_Noctem.jpg",
        band: "Leo Blomov",
        title: "Carpe Noctem",
        date: "September 2021",
      },
      {
        id: 2,
        src: "./src/Degage_Degage.jpg",
        band: "Degage",
        title: "Degage",
        date: "October 2021",
      },
      {
        id: 3,
        src: "./src/Rouge_Congo_Rien_Na_De_Sens.jpg",
        band: "Rouge Congo",
        title: "Rien n'a de sens",
        date: "March 2022",
      }
    ])

    const Div = styled.div`
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    `
    
  return (
    <Div>
      {albumList.map((album) => (<Card {...album} key={album.id}/>))}
    </Div>
  )
}

export default Cards