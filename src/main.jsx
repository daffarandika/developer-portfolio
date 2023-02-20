import React from 'react'
import ReactDOM from 'react-dom/client'
import CardList from './CardList/CardList'
import HeaderCard from './HeaderCard/HeaderCard'

const cardItems = [
  {
    "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
    "text": "Android Studio"
  },
  {
    "imageUrl": "https://dzone.com/storage/temp/8229324-expressjs-logo.png",
    "text": "Express.js"
  },
  {
    "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "text": "React.js"
  },
  {
    "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    "text": "ASP dotnet"
  },
]
ReactDOM.createRoot(document.getElementById('root')).render(
    <HeaderCard />
    // {/* <CardList cardItems={cardItems} /> */}
)
