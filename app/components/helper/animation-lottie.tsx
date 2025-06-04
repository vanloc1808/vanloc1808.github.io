'use client';

import { FC } from 'react';
import Lottie from 'lottie-react';

interface AnimationLottieProps {
  animationData: any;
}

const AnimationLottie: FC<AnimationLottieProps> = ({ animationData }) => {
  return <Lottie animationData={animationData} loop={true} />;
};

export default AnimationLottie;
