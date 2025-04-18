// app/components/helper/animation-lottie.jsx
'use client';

import Lottie from "lottie-react";

const AnimationLottie = ({ animationData, width = '95%' }) => {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{ width }}
    />
  );
};

export default AnimationLottie;