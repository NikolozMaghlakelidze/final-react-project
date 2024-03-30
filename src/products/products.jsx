// import './ids'
import { Kit1, Kit2, Kit3 } from './ids';
import './products.css'
import { useState } from 'react';
import Button from '@mui/material/Button';
   

 function Products () {
  
   const [count1, setcount1] = useState(0);
   const Atvla1 = () => {
      setcount1(count1 + 1);
    };
    const [count2, setcount2] = useState(0);
   const Atvla2 = () => {
      setcount2(count2 + 1);
    };
    const [count3, setcount3] = useState(0);
   const Atvla3 = () => {
      setcount3(count3 + 1);
    };
    const [discountedPrice, setDiscountedPrice] = useState(Kit1.price);
    const [discountedPrice1, setDiscountedPrice1] = useState(Kit2.price);
    const [discountedPrice2, setDiscountedPrice2] = useState(Kit3.price);
    const applyDiscount = () => {
      setDiscountedPrice(Kit1.price * 0.5);
    };
    const applyDiscount1 = () => {
      setDiscountedPrice1(Kit2.price * 0.5);
    }; 
    const applyDiscount2 = () => {
      setDiscountedPrice2(Kit3.price * 0.5);
    };
    function getProductPrice(discountedPrice, productPrice) {
      return discountedPrice === productPrice ? `price: ${productPrice}$` : `price: ${discountedPrice}$`;
    }
    function getProductPrice1(discountedPrice1, productPrice1) {
      return discountedPrice === productPrice1 ? `price: ${productPrice1}$` : `price: ${discountedPrice1}$`;
    }
    function getProductPrice2(discountedPrice2, productPrice2) {
      return discountedPrice === productPrice2 ? `price: ${productPrice2}$` : `price: ${discountedPrice2}$`;
    }
   
    
    return (
 <figcaption className="figc"> 
   <div className="products_div">
   <img alt="Img" className='products_img'  src="https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2024/03/Screenshot-2024-03-14-161851-376x234.png"></img>
    <h2 className='products_name'>name: {Kit1.name}</h2>
    <h3 className='products_p'>product: {Kit1.product}</h3>
    {/* <button className='products_button btn' onClick={Atvla1}>buy now</button> */}
    <Button variant="contained" color="success"className='products_button btn' onClick={Atvla1}>buy now</Button>
    <p className='orderedtime'>oderer {count1} time</p>
    <button className='discount' onClick={applyDiscount}>50% discount</button>
    {/* <p className='products_price'>{discountedPrice === Kit1.price ? `price: ${Kit1.price}$` : `price: ${discountedPrice}$`}</p> */}
    <p className="products_price">{getProductPrice(discountedPrice, Kit1.price)}</p>
   </div>,
   <div className='products_div'>
   <img alt="Img" className='products_img'  src="https://tse2.mm.bing.net/th?id=OIP.4jtYsKCt0J3Z2UXOB-peUAHaHa&pid=Api&P=0&h=220"></img>
   <h2 className='products_name'>name: {Kit2.name}</h2>
   <h3 className='products_p'>product: {Kit2.product}</h3>
   {/* <button className='products_button btn' onClick={Atvla2}>buy now</button> */}
   <Button variant="contained" color="success"className='products_button btn' onClick={Atvla2}>buy now</Button>
    <p className='orderedtime'>oderer {count2} time</p>
    <button className='discount' onClick={applyDiscount1}>discount</button>
    {/* <p className='products_price'>{discountedPrice1 === Kit2.price ? `price: ${Kit2.price}$` : `price: ${discountedPrice1}$`}</p> */}
    <p className="products_price">{getProductPrice1(discountedPrice1, Kit2.price)}</p>
  </div>,
  <div className='products_div'>
  <img alt="Img" className='products_img'  src="https://tse2.mm.bing.net/th?id=OIP.qeWlp4VrpW5BYGDzCru-hAHaHa&pid=Api&P=0&h=220"></img>
  <h2 className='products_name'>name: {Kit3.name}</h2>
  <h3 className='products_p'>product: {Kit3.product}</h3>
  <Button variant="contained" color="success"className='products_button btn' onClick={Atvla3}>buy now</Button>
  {/* <Button variant="contained" color="success">Success</Button> */}
    <p className='orderedtime'>oderer {count3} time</p>
    <button className='discount' onClick={applyDiscount2}>discount</button>
    {/* <p className='products_price'>{discountedPrice2 === Kit3.price ? `price: ${Kit3.price}$` : `price: ${discountedPrice2}$`}</p> */}
    <p className="products_price">{getProductPrice2(discountedPrice2, Kit3.price)}</p>
 </div>
    </figcaption> 

    )
 }

export default Products;
