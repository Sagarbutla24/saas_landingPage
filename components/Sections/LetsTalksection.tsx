import React from 'react'
import MainLayoutCard from '../cards/MainLayout';
const Header = () => {
  return (
    <div>
    Questions?
    <br /> Let&apos;s talk
  </div>
  )
};
const LetsTalksection = () => {
  return (
    <MainLayoutCard
      title={Header}
      description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
      rightSideImageUrl="/images/wallet.gif"
    />
  )
}

export default LetsTalksection
