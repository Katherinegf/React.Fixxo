import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import { ProductContext } from '../contexts/contexts'

const ProductTiles = ({title}) => {
  const products = useContext(ProductContext)

  return (
    <section className="product-tiles">
            <div className="container">
              <h1>{title}</h1>
                <div className ="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                  {
                    products.map(product => <ProductCard key={product.id} item={product} />)
                  }         
                </div>
            </div>      
    </section>
  )
}

export default ProductTiles