import React, { useState, useEffect } from 'react';
import './style.css';
// import Video1 from '../../../public/Video/video1.mp4'

function HomeSection() {
  const [bgIndex, setBgIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex === 2 ? 1 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const divHomeSection = document.querySelector('.divHomeSection');
      divHomeSection.classList.add('change-bg');
      divHomeSection.classList.remove(`bg${bgIndex === 1 ? 2 : bgIndex - 1}`);
      divHomeSection.classList.add(`bg${bgIndex}`);
    }, 3000);

    return () => clearTimeout(timer);
  }, [bgIndex]);

  return (
    <div className='Home'>
      <div className={`divHomeSection bg${bgIndex}`}>
      </div>
      <div className="divProductsSection">
        <p className='ProductsWaterName'>PRODUCTS</p>
        <div className="divHomeProduct">
          <div className="divProducAbout">
            <video className='video' muted loop>
              <source src="/Video/video3.mp4" type="video/mp4" />
            </video>
            <div className="divDataProducts">
              <p className='WaterName'>Flow Water</p>
              <p className='WaterMl'>330 ML</p>
            </div>
              <button className='button' type="button">Details</button>
              <button className='button1' type="button">Add To Basket</button>
          </div>
          <div className="divProducAbout">
            <video className='video' muted loop>
              <source src="/Video/video2.mp4" type="video/mp4" />
            </video>
            <div className="divDataProducts">
              <p className='WaterName'>Flow Water</p>
              <p className='WaterMl'>330 ML</p>
            </div>
              <button className='button' type="button">Details</button>
              <button className='button1' type="button">Add To Basket</button>
          </div>
          <div className="divProducAbout">
            <video className='video' muted loop>
              <source src="/Video/video1.mp4" type="video/mp4" />
            </video>
            <div className="divDataProducts">
              <p className='WaterName'>Flow Water</p>
              <p className='WaterMl'>330 ML</p>
            </div>
              <button className='button' type="button">Details</button>
              <button className='button1' type="button">Add To Basket</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
