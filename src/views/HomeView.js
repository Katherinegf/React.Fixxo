import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenu from '../sections/MainMenu'
import ProductTiles from '../sections/ProductTiles'

const HomeView = () => {
 

  return (
    <>
      <MainMenu />
      <ProductTiles title= "Featured Products"  />
      <ProductTiles title= "Top Products"  />
       <FooterSection />
    </>
  )
}

export default HomeView