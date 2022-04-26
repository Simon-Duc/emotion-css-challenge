import Card from "./Card";
import { useState } from "react";

function Cards() {
  const [albumList, setAlbumList] = useState(
      [
        {
          id: 1,
          src: "./src/Leo_Blomov_Carpe_Noctem.jpg",
          alt: "Leo Blomov - Carpe Noctem",
          title: "Nouvel album de Leo Blomov : Carpe Noctem"
        },
        {
          id: 2,
          src: "./src/Degage_Degage.jpg",
          alt: "Degage - Degage",
          title: "Nouvel album de Degage : Degage"
        }
      ])

  return (
    <div className="Cards">
      {albumList.map((src, alt, title, id) => (<Card {...src} {...alt} {...title} key={id}/>))}
    </div>
  )
}

export default Cards