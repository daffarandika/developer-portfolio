import React from 'react'
import './HeaderCard.css'
export default function TitleCard () {
  const fill = <h1>Hello, I&apos; <span className="fancy">Daffa Randika</span>. <br/> A fullstack-developer</h1>;
  return (
    <div className="title-card">
      <div id="left-side" className="header-side">{fill}</div>
      <div id="left-side" className="header-side">{fill}</div>
    </div>
  )
}
