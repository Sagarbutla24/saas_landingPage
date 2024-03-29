/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
const TestimonialSection = () => {
  
  return (
    <section className='bg-primary px-8 md:px-[5rem] py-[5.625rem] rounded-large mt-16'>
        <div>
          <p className='text-white text-[1.5rem] font-[600] text-center'>
           &apos; &apos; Lorem ipsum dolor sit amet, consectetur adipiscing elit. &apos; &apos;
          </p>
        </div>
          <div className='flex justify-center items-center gap-[1.25rem] mt-[3.15rem]'>

            <Avatar className='w-[5rem] h-[5rem] rounded'>
              <AvatarImage src={"/images/boy.png"} alt="Avatar" />
              <AvatarFallback>
                GH
              </AvatarFallback>
            </Avatar>

          </div>
          <div>
            <p className='text-white text-[1.5rem] font-[600] text-center mt-4'>
              John Doe
            </p>
            <p className='text-white text-center text-[0.875rem] font-[500]'>
              CEO of Company
            </p>
            <div className='flex justify-center mt-8 gap-5'>
        {[1, 2, 3, 4, 5].map((i) => (
          <img
            key={i}
            src={`/images/star-icon.svg`}
            alt="star"
          />
        ))}
            </div>
          </div>


    </section>
  )
}

export default TestimonialSection
