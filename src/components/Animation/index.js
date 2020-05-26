import React, { useEffect, useRef } from "react";
import lottie from 'lottie-web';

import "./styles.css";

function Animation() {

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      resizeMode: 'contain',
      loop: true,
      autoplay: true,
      autoSize: true,
      animationData: require('./assets/malaio.json')
    })
  }, [])

  return (
    <div className="Animation">
    <div className="container" ref={container}></div>
    </div>
    
  )
 
};

export default Animation;