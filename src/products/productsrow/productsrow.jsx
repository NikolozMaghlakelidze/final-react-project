import {Kit4, Kit5, Kit6 } from '../ids';
import './productsrow.css'
import { useState } from 'react';
import Button from '@mui/material/Button';



function Productsrow() {
    const [count4, setcount4] = useState(0);
   const Atvla4 = () => {
      setcount4(count5 + 1);
    };
    const [count5, setcount5] = useState(0);
   const Atvla5 = () => {
      setcount5(count5 + 1);
    };
    const [count6, setcount6] = useState(0);
   const Atvla6 = () => {
      setcount6(count6 + 1);
    };
    const [discountedPrice3, setDiscountedPrice3] = useState(Kit4.price);
    const [discountedPrice4, setDiscountedPrice4] = useState(Kit5.price);
    const [discountedPrice5, setDiscountedPrice5] = useState(Kit6.price);
    const applyDiscount3 = () => {
      setDiscountedPrice3(Kit4.price * 0.5);
    };
    const applyDiscount4 = () => {
      setDiscountedPrice4(Kit5.price * 0.5);
    }; 
    const applyDiscount5 = () => {
      setDiscountedPrice5(Kit6.price * 0.5);
    };
    function getProductPrice3(discountedPrice3, productPrice3) {
        return discountedPrice3 === productPrice3 ? `price: ${productPrice3}$` : `price: ${discountedPrice3}$`;
      }
      function getProductPrice4(discountedPrice4, productPrice4) {
        return discountedPrice4 === productPrice4 ? `price: ${productPrice4}$` : `price: ${discountedPrice4}$`;
      }
      function getProductPrice5(discountedPrice5, productPrice5) {
        return discountedPrice5 === productPrice5 ? `price: ${productPrice5}$` : `price: ${discountedPrice5}$`;
      }
    return (
<figcaption className='figca'>
<div className='products_div1'>
<img alt="Img" className='products_img'  src="https://tse2.mm.bing.net/th?id=OIP.yU0GojeMkDrwYrmakp2-vwHaEK&pid=Api&P=0&h=220"></img>
 <h2 className='products_name'>name: {Kit4.name}</h2>
 <h3 className='products_p'>product: {Kit4.product}</h3>
     {/* <button className='products_button btn' onClick={Atvla4}>buy now</button> */}
     <Button variant="contained" color="success"className='products_button btn' onClick={Atvla4}>buy now</Button>
    <p className='orderedtime'>oderer {count4} time</p>
    <button className='discount' onClick={applyDiscount3}>discount</button>
    {/* <p className='products_price'>{discountedPrice3 === Kit4.price ? `price: ${Kit4.price}$` : `price: ${discountedPrice3}$`}</p> */}
    <p className="products_price">{getProductPrice3(discountedPrice3, Kit4.price)}</p>
</div>,
<div className='products_div1'>
<img alt="Img" className='products_img'  src="https://tse1.mm.bing.net/th?id=OIP.O97HyRWBrNc3D4VCvQbI_AHaHa&pid=Api&P=0&h=220"></img>
    <h2 className='products_name'>name: {Kit5.name}</h2>
    <h3 className='products_p'>product: {Kit5.product}</h3>
        {/* <button className='products_button btn' onClick={Atvla5}>buy now</button> */}
        <Button variant="contained" color="success"className='products_button btn' onClick={Atvla5}>buy now</Button>
    <p className='orderedtime'>oderer {count5} time</p>
    <button className='discount' onClick={applyDiscount4}>discount</button>
    {/* <p className='products_price'>{discountedPrice4 === Kit5.price ? `price: ${Kit5.price}$` : `price: ${discountedPrice4}$`}</p> */}
    <p className="products_price">{getProductPrice4(discountedPrice4, Kit5.price)}</p>
   </div>,
   <div className='products_div1'>
   <img alt="Img" className='products_img'  src="https://tse1.mm.bing.net/th?id=OIP.IPfXBjH9WH_slVNPeDKNjQHaDy&pid=Api&P=0&h=220"></img>
    <h2 className='products_name'>name: {Kit6.name}</h2>
    <h3 className='products_p'>product: {Kit6.product}</h3>
        {/* <button className='products_button btn' onClick={Atvla6}>buy now</button> */}
    <Button variant="contained" color="success"className='products_button btn' onClick={Atvla6}>buy now</Button>
    <p className='orderedtime'>oderer {count6} time</p>
    <button className='discount' onClick={applyDiscount5}>discount</button>
    {/* <p className='products_price'>{discountedPrice5 === Kit6.price ? `price: ${Kit6.price}$` : `price: ${discountedPrice5}$`}</p> */}
    <p className="products_price">{getProductPrice5(discountedPrice5, Kit6.price)}</p>
   </div>
</figcaption>
    )
}

export default Productsrow;