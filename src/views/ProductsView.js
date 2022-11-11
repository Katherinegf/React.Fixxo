import React from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import MainMenu from '../sections/MainMenu'
import ProductTiles from '../sections/ProductTiles'

const ProductsView = () => {
  return (
    <>
    <MainMenu />
    <Breadcrumb currentPage="Products" />
    <ProductTiles title="Products" />
    </>
 
  )
}

export default ProductsView