"use client"
import { useAppContext } from '@/context/Context';
import { useRouter } from 'next/navigation';
import React from 'react'

function page() {
  const {pageTwoName} = useAppContext();

  const router = useRouter();
  const handlePageChange = () => {
router.push('/');
  }
  return (
    <div>
     <h1>{pageTwoName}</h1>
       <button className='rounded-lg px-5 py-5  bg-orange-950 text-white'onClick={handlePageChange}> Go back Btn</button> 
    </div>
  )
}

export default page


