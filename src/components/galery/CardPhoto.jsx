import React from 'react'

const CardPhoto = ({photo}) => {
  return (
    // donde se desplegan las fotos de la zona de galeria
    <article>
        <img src={photo.img_src} alt="" />
    </article>
  )
}

export default CardPhoto