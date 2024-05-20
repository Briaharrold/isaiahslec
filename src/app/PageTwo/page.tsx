"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export const PageTwo = () => {
  const router = useRouter();
  const handlePageChange = () => {
router.push('/');
  }
  return (
    <div>
     
       <button className='rounded-lg px-5 py-5  bg-orange-950 text-white'onClick={handlePageChange}> Go back Btn</button> 
    </div>
  )
}

