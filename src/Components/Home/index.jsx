import React, { useState, useEffect } from 'react';
import './style.css';
import Image1 from '../../../public/Image/image1.jpg'
import Image2 from '../../../public/Image/image2.jpg'
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";



function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}


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
        <section className='SectionHome'>
          <ParallaxText baseVelocity={-5}>CASA MALKA TEQUILA CASA MALKA TEQUILA</ParallaxText>
        </section>
      </div>
      <div className="divProductsSection">
        <p className='ProductsWaterName'>PRODUCTS</p>
        <div className="divHomeProduct">
          
          <div className="divProducAbout">
            <video className='video' muted autoPlay loop>
              <source src="/Video/video1.mp4" type="video/mp4" />
            </video>
            <div className="divDataProducts">
              <p className='WaterMl'>330 ML</p>
              <div className="divPriceProducts">
              <p className='WaterName'>Casa Malka Tequila</p>
              <p className='WaterMl'>$50.23</p>
              </div>
            </div>
            <div className="divButtonGroupSec">
              <button className='button' type="button">Details</button>
              <button className='button' type="button">Add To Basket</button>
            </div>
          </div>
          <div className="divProducAbout">
            <video className='video' muted autoPlay loop>
              <source src="/Video/video1.mp4" type="video/mp4" />
            </video>
            <div className="divDataProducts">
              <p className='WaterMl'>330 ML</p>
              <div className="divPriceProducts">
              <p className='WaterName'>Casa Malka Tequila</p>
              <p className='WaterMl'>$50.23</p>
              </div>
            </div>
            <div className="divButtonGroupSec">
              <button className='button' type="button">Details</button>
              <button className='button' type="button">Add To Basket</button>
            </div>
          </div>
          <div className="divProducAbout">
            <video className='video' muted autoPlay loop>
              <source src="/Video/video1.mp4" type="video/mp4" />
            </video>
            <div className="divDataProducts">
              <p className='WaterMl'>330 ML</p>
              <div className="divPriceProducts">
              <p className='WaterName'>Casa Malka Tequila</p>
              <p className='WaterMl'>$50.23</p>
              </div>
            </div>
            <div className="divButtonGroupSec">
              <button className='button' type="button">Details</button>
              <button className='button' type="button">Add To Basket</button>
            </div>
          </div>
          <div className="divProducAbout">
            <video className='video' muted autoPlay loop>
              <source src="/Video/video1.mp4" type="video/mp4" />
            </video>
            <div className="divDataProducts">
              <p className='WaterMl'>330 ML</p>
              <div className="divPriceProducts">
              <p className='WaterName'>Casa Malka Tequila</p>
              <p className='WaterMl'>$50.23</p>
              </div>
            </div>
            <div className="divButtonGroupSec">
              <button className='button' type="button">Details</button>
              <button className='button' type="button">Add To Basket</button>
            </div>
          </div>
          
        </div>
      </div>
      <div className="divAboutProduct">
        <p>Wild Agave Americana plants from India’s Deccan are carefully sorted through and the mature ones that have reached 8 to 10 years are selected.</p>
        <img className='Image1' src={Image1} />
      </div>
      <div className="divAboutProduct1">
        <p>You wake from a dream, and you listen. The desert, at first, is silent. A hummingbird lands on a cactus flower, its fluffy yellow blossoms pushing out from thorny skin. Here, it's only you, the rock-laden earth, the birds, and the agave, who at once cling tightly to the soil and reach their thin arms up towards the sun.</p>
      </div>
      <div className="divAboutProduct2">
        <img className='Image2' src={Image2} />
        <p>Aged Agave spirit from various casks is blended, non-chill filtered and bottled. No artificial additives or coloring agents are used.</p>
      </div>
    </div>
  );
}

export default HomeSection;
