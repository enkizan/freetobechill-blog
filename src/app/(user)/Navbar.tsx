
'use client'
import { Button, Drawer } from '@geist-ui/core';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

function Navbar() {
  const [state, setState] = React.useState(false)

  
  return (
    <div className='hidden md:block'>
      <div className=" my-5 flex items-center justify-center p-3 space-x-2 text-xl text-black font-['serif'] font-light '">
        <Link href="/">
          <p className="
                    mx-8 
                    hover:scale-110
                    transition-transform 
                    duration-200 
                    ease-out
                    cursor-pointer
          ">Home</p>
          </Link>
        <Link href="/author/cheungfan">
          <p className="
                     mx-8 
                     hover:scale-110
                     transition-transform 
                     duration-200 
                     ease-out
                     cursor-pointer
           ">Cheung Fan</p>
          </Link>
        <Link href="/author/abi">
          <p className="
                    mx-8 
                    hover:scale-110
                    transition-transform 
                    duration-200 
                    ease-out
                    cursor-pointer
          ">Abi</p>
          </Link>
        <Link href="/author/winwinho">
          <p className="
                    mx-8 
                    hover:scale-110
                    transition-transform 
                    duration-200 
                    ease-out
                    cursor-pointer
          ">WinWin Ho </p>
          </Link>
        {/* <Link href="/author/tung-san">
        <p className="
                  mx-8 
                  hover:scale-110
                  transition-transform 
                  duration-200 
                  ease-out
                  cursor-pointer
        ">Tung San's Dev test </p>
        </Link> */}
        <Link href="/aboutus">
          <p className="
                    mx-8 
                    hover:scale-110
                    transition-transform 
                    duration-200 
                    ease-out
                    cursor-pointer
          ">About us</p>
          </Link>
      </div>
        {/* <div>sajlfdjlkfdsjf</div> */}
    </div>
  )
}

export default Navbar
