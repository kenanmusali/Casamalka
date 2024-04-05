import "./style.css";
import React from 'react'
import logo from '../../../../public/Logo/Flow-logo.svg'
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

export default function Footer() {
  return (
    <div>
      <div className="divFooter">
        <div className="divFooterSection FooterFirst">
          <img src={logo} className='footerLogo' alt="Flow" />
          <p>We make products with minimal environmental impact
            that keep you hydrated when you are far away from the tap.
          </p>
          ©Flow, 2024. All Right Reserved,
          <p>
          </p>
        </div>
        <div className="divFooterSection FooterMiddle"></div>
        <div className="divFooterSection Footerlast">
          <div className="divFooterMenuSecion">
            <p className='HeadFooter'>MENU</p>
            <p>Products</p>
            <p>Contact</p>
            <p>Reseler</p>
          </div>
          <div className="divFooterMenuSecion">
            <p className='HeadFooter'>INFO</p>
            <p>Privacy Policy</p>
            <p>Term of Use</p>
            <p>See Faq</p>
          </div>
          <div className="divFooterMenuSecion">
            <p className='HeadFooter'>SOCIAL</p>
            <p>Instagram</p>
            <p>Twitter (X)</p>
            <p>Pinterest</p>
          </div>
        </div>
      </div>
   
    <section>
      <ParallaxText baseVelocity={-5}>Drink Water Drink Water Drink Water</ParallaxText>

    </section> 
    </div>
  );
}
