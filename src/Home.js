import React from 'react'
import Nav from './Nav.js'
import film from './images/film.svg'
import market from './images/market.svg'
import './sass/main.scss'
import './css/main.css'
import pic01 from './images/pic01.jpg'
export default function Home() {
  return (
    <div className="home-flexbox">
      <img class="homeimage" src={film} alt="Example image" />
      <img class="homeimage" src={market} alt="Example image" />
      <img
        class="homeimage"
        src="https://source.unsplash.com/random/"
        alt="Example image"
      />
      <img
        class="homeimage"
        src="https://source.unsplash.com/random/"
        alt="Example image"
      />
    </div>
  )
}
