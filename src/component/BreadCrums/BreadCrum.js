import React from 'react'
import './Breadcum.css'
import arrow_icon from '../Assegts/breadcrum_arrow.png'

const BreadCrum = (props) => {
    console.log(props);
    // const {product} = props;
    const { product} = props;
  return (
    <div>
        <div className="breadcrum">
           HOME <img src={arrow_icon} alt=""  /> SHOP <img src={arrow_icon} alt=""  /> {product.category} <img src={arrow_icon} alt=""  /> {product.name} 
       
        </div>
    </div>
  )
}

export default BreadCrum





// import React from 'react'
// import './Breadcum.css'
// import arrow_icon from '../Assegts/breadcrum_arrow.png'

// const BreadCrum = (props) => {
//     // const {product} = props;
//     const { product = {} } = props;
//   return (
//     <div>
//         <div className="breadcrum">
//            HOME <img src={arrow_icon} alt=""  /> SHOP <img src={arrow_icon} alt=""  /> {product.category} <img src={arrow_icon} alt=""  /> {product.name} 
       
//         </div>
//     </div>
//   )
// }

// export default BreadCrum