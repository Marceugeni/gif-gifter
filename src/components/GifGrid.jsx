import React from 'react'
import { getGifs } from "../helpers/getgifs"
import { useState, useEffect } from 'react';

export default function GifGrid({ category }) {

  const [images, setimages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs( category );
    setimages(newImages);
  }

  useEffect( () => {
    getImages();
  }, [])

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map( img => 
          (
          <>
            <li key={img.id}>{img.title}</li>
            <img src={img.url} alt={img.title} />
          </>
          )
        )}
      </ol>
    </>
  )
}
