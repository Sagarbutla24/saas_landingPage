import React from 'react'
import MainButton from './MainButton'

const Navbar = () => {
  return (
  <header className='flex justify-between'>
    <p className='text-2xl text-white font-[600]'>Wallet</p>
    <div className='hidden md:flex gap-[1.8625rem] items-center'>
      <p className='text-white text-[14px]'>Sign up</p>
      <MainButton text="Sign in" classes="bg-white text-black rounded-[5px] px-3 py-2 text-[14px] font-[500]  w-[100px] h-[40px]"
      size='normal'>

      </MainButton>
    </div>

  </header>
  )
}

export default Navbar
