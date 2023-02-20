import React from 'react'
import './HeaderCard.css'
export default function TitleCard () {
  const fillLeft = <h1>Hello, I&apos; Daffa Randika. <br/> A <span className="fancy">Software Engineer</span></h1>;
  const fillRight = <h1>Hello, I&apos; Daffa Randika. <br/> A <span className="fancy">Problem Solver</span></h1>;

  return (
    <div className="title-card">
      <div id="left-side" className="header-side">{fillLeft}</div>
      <div id="right-side" className="header-side">{fillRight}</div>
    </div>
  )
}
