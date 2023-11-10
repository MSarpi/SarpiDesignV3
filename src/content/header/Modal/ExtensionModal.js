import React from 'react';
import Carousel from '../../../../node_modules/react-carousel3/dist/esm/Carousel/index';
import logo1 from '../../assets/img/logo1.png';
import logo2 from '../../assets/img/logo2.png';
import logo3 from '../../assets/img/logo3.png';
import logo4 from '../../assets/img/logo4.png';
import logo5 from '../../assets/img/logo5.png';
import logo6 from '../../assets/img/logo6.png';
import logo7 from '../../assets/img/logo7.png';
import logo8 from '../../assets/img/logo8.png';
import logo9 from '../../assets/img/logo9.png';
import logo10 from '../../assets/img/logo10.png';
function carousel3d() {
    const style = {
        width: 100,
        height: 100,
        // padding: '1rem'
      }; 
  return (
    <div style={{marginTop: '2rem', }}>
        <Carousel yOrigin={0} yRadius={30} autoPlay={true}>
        <div key={1} style={style} className='carousel-img'>
            <img alt="" className='logo-carousel' src={logo1} />
        </div>
        <div key={2} style={style}>
            <img alt="" className='logo-carousel' src={logo2} />
        </div>
        <div key={3} style={style}>
            <img alt="" className='logo-carousel' src={logo3} />
        </div>
        <div key={4} style={style}>
            <img alt="" className='logo-carousel' src={logo4} />
        </div>
        <div key={5} style={style}>
            <img alt="" className='logo-carousel' src={logo5} />
        </div>
        <div key={6} style={style}>
            <img alt="" className='logo-carousel' src={logo6} />
        </div>
        <div key={7} style={style}>
            <img alt="" className='logo-carousel' src={logo7} />
        </div>
        <div key={8} style={style}>
            <img alt="" className='logo-carousel' src={logo8} />
        </div>
        <div key={9} style={style}>
            <img alt="" className='logo-carousel' src={logo9} />
        </div>
        <div key={10} style={style}>
            <img alt="" className='logo-carousel' src={logo10} />
        </div>
        </Carousel>
    </div>
  )
}

export default carousel3d;
