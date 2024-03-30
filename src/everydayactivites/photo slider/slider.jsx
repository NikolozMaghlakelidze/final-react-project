import  { useState } from 'react';
import './slidder.css'
import Button from '@mui/material/Button';

const Slaideri = () => {
    const [sawyisi, shemcvleli] = useState(0);
    const images  = [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b919f813-6935-4404-9bd7-63ea54abc5dd/france-national-team-2022-23-stadium-home-kylian-mbappe-mens-dri-fit-soccer-jersey-bfCbG1.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/40a797df-46bc-4de5-aa7b-f2bdf53fbd82/netherlands-national-team-2022-23-stadium-away-frenkie-de-jong-womens-dri-fit-soccer-jersey-LGrCCT.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8292c78b-c85e-4320-858c-c21f141b69b7/south-korea-national-team-2022-23-stadium-home-son-heung-min-mens-dri-fit-soccer-jersey-vTZgWK.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/357e68ce-0c84-4b37-b55c-1e9d9c2415ae/south-korea-national-team-2022-23-stadium-away-son-heung-min-womens-dri-fit-soccer-jersey-T9FLbq.png",
      "https://tse2.mm.bing.net/th?id=OIP.jC4JvjaCArYiNku52f5wWwHaHa&pid=Api&P=0&h=220"
    ];
  
    const wina = () => {
        shemcvleli((winaindex) => (winaindex + images.length - 1) % images.length);
    };
  
    const shemdegi = () => {
        shemcvleli((shemdegiindex) => (shemdegiindex + 1) % images.length);
    };
  
    return (
      <div className='slider_div'>
        {/* <button className='slider_button'></button> */}
        <Button color="secondary" onClick={wina} >previous</Button>
        <img src={images[sawyisi]} alt="" className='sliderImage' />
        <Button color="secondary" onClick={shemdegi}>next</Button>
      </div>
    );
  };
  
  
  export default Slaideri;