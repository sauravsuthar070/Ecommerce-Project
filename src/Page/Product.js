import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../component/BreadCrums/BreadCrum'
import ProductDisplay from '../component/ProductDisplay/ProductDisplay'
import { DescryptionBox } from '../component/DescryptionBox/DescryptionBox'
import RelatedProducts from '../component/RelatedProducts/RelatedProjects'
const Product = () => {
    const {all_product} = useContext(ShopContext)
    const {productId} = useParams();
    const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
        <BreadCrum product={product}/>
        <ProductDisplay product={product}/>
        <DescryptionBox/>
        <RelatedProducts/>
    </div>
  )
}

export default Product;