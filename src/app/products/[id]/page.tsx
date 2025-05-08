import React from 'react'

const ProductDetail = async({params}:{
  params:Promise<{id:string}>
}) => {
  const {id} = await params;
  return (
    <div>
      <h1>Product {id} Details</h1>
    </div>
  )
}

export default ProductDetail