/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { TFeatureCardType } from '@/types/index'
interface IProps {
  title: string;
  description: string;
  iconType: TFeatureCardType;
}
const FeaturesCard = ({iconType,title,description}: IProps) => {
  const imageRoute=
  iconType === "card" ? "/images/card-icon.png" 
  : iconType === "coin" ? "/images/coin-icon.png": "/images/purse-icon.png"

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={imageRoute} alt="overview" />
      <p className="mt-[1.5rem] mb-[1rem] text-normal text-white font-[600] text-center">{title}</p>
      <p className="text-normal text-center  text-grey">{description}</p>
    </div>
  )
}





export default FeaturesCard
