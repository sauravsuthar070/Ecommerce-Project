
import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrum from '../component/BreadCrums/BreadCrum';
import ProductDisplay from '../component/ProductDisplay/ProductDisplay';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();

    // Ensure the productId is correctly parsed and the product is found
    const product = all_product ? all_product.find((e) => e.id === Number(productId)) : null;

    if (!product) {
        return <div>Product not found or loading...</div>; // Optional fallback for loading or invalid product
    }

    return (
        <div>
            <BreadCrum product={product} />
            <ProductDisplay product={product} />
        </div>
    );
};

export default Product;







// import React, { useContext } from 'react'
// import { ShopContext } from '../Context/ShopContext'
// import { useParams } from 'react-router-dom'
// import BreadCrum from '../component/BreadCrums/BreadCrum'
// import ProductDisplay from '../component/ProductDisplay/ProductDisplay'

// const Product = () => {
//     const {all_product} = useContext(ShopContext)
//     const {productId} = useParams();
//     const product = all_product.find((e)=>e.id === Number(productId));
//   return (
//     <div>
//         <BreadCrum product={product}/>
//         <ProductDisplay product={product}/>
//     </div>
//   )
// }

// export default Product;