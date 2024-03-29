/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {Separator} from "@/components/ui/separator"

const LogoGroupSection = () => {
  return (
    <div className='w-full  flex flex-col  mt-[4rem] '>    
    <Separator className='h-2 border-t border-t-[#ffffff33]' color='#ffffff33'/>
      <div className='py-[3.1215rem] md:py-[6rem] items-center'>
        <img src="/images/logo-group.png" alt="logoGroup" className='hidden md:block'/>
        <img src="/images/logo-group-mobile.png" alt="logoGroup" className='block md:hidden'/>
      </div>
      <Separator className='h-2 border-t border-t-[#ffffff33]' color='#ffffff33'/>
    </div>
  )
}

export default LogoGroupSection
