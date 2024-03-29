import React from 'react'
import FeaturesCard from '../cards/FeaturesCard'
import { TFeatureCardType } from '@/types/index'
const FeratureSection = () => {
  const features = [ {
    title: "Card",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor.",
    iconType: "card"
  },
  {
    title: "Coin",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor.",
    iconType: "coin"
  },
  {
    title: "Wallet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor.",
    iconType: "wallet"
  }
    
  ]

  return (
    <div >
      {features.map((feature) => (
        <div key={feature.iconType}>
          <FeaturesCard iconType={feature.iconType as TFeatureCardType} title={feature.title} description={feature.description} />
        </div>
      ))}
    </div>
  )
}

export default FeratureSection
