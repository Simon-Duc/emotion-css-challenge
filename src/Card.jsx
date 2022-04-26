import React from 'react';
function Card({src, alt, title}) {

  return (
    <div className="Card">
      <figure>
        <img src={src} alt={alt} />
        <figcaption>{title}</figcaption>
      </figure>
    </div>
  )
}

export default Card;