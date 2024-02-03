'use client'

import { Button, Drawer } from '@geist-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';



function HomeHeader() {
  const [state, setState] = React.useState(false)
  return (

    <header className='my-10 flex items-center justify-center space-x-2 font-bold px-10 py-5'>
      <div className='relative flex items-center justify-center space-x-3 w-full'>

        <MenuIcon className='
            absolute 
            left-0 
            cursor-pointer 
            hover:scale-110 
            block 
            md:hidden
            transition-transform 
            duration-100 
            ease-out
            ' sx={{ fontSize:30 }} color='action' onClick={() => setState(true)} ></MenuIcon>

        <Drawer  
          visible={state} 
          onClose={() => setState(false)} 
          placement="left"
          keyboard={true}
          wrapClassName=''
          >

              <Drawer.Title>
                    <Link href="/" className=' ' >
                      <p className="
                      text-stone-600
                      my-5
                      font-thin
                      hover:font-extralight
                      hover:scale-105
                      transition-transform 
                      duration-100 
                      ease-out
                      "
                      
                      onClick={() => setState(false)}
                      >Freetobechill</p>
                  </Link>
                </Drawer.Title>

              <Drawer.Subtitle>Welcome</Drawer.Subtitle>

              <hr className=' my-3 mb-6 mx-10'/>

            <div className=' w-full mr-20 ms-4'>


              <Link href="/author/cheungfan"  >
              <p className="
                        mx-8
                        my-3

                        text-left 
                        text-stone-500

                        font-light
                        hover:font-normal
                        hover:scale-105
                        hover:text-stone-600
                        cursor-pointer

                        transition-transform 
                        duration-200 
                        ease-out
                        
              "
              onClick={() => setState(false)}
              >Cheung Fan</p>
              </Link>
            <Link href="/author/abi">
              <p className="
                        mx-8
                        my-3

                        text-left 
                        text-stone-500

                        font-light
                        hover:font-normal
                        hover:scale-105
                        hover:text-stone-600
                        cursor-pointer

                        transition-transform 
                        duration-200 
                        ease-out
              "
              onClick={() => setState(false)}
              >Abi</p>
              </Link>
            <Link href="/author/winwinho">
              <p className="
                        mx-8
                        my-3

                        text-left 
                        text-stone-500

                        font-light
                        hover:font-normal
                        hover:scale-105
                        hover:text-stone-600
                        cursor-pointer

                        transition-transform 
                        duration-200 
                        ease-out
              "
              onClick={() => setState(false)}
              >WinWin Ho </p>
              </Link>
            <Link href="/author/tung-san">
            <p className="
                        mx-8
                        my-3
                        

                        text-left 
                        text-stone-500

                        font-light
                        hover:font-normal
                        hover:scale-105
                        hover:text-stone-600
                        cursor-pointer

                        transition-transform 
                        duration-200 
                        ease-out
            "
            onClick={() => setState(false)}
            >Dev test </p>
            </Link>

            <Link href="/aboutus">
              <p className="
                        mx-8
                        my-3

                        text-left 
                        text-stone-500

                        font-light
                        hover:font-normal
                        hover:scale-105
                        hover:text-stone-600
                        cursor-pointer

                        transition-transform 
                        duration-200 
                        ease-out
              "
              onClick={() => setState(false)}
              >About us</p>
              </Link>
          </div>
        </Drawer>

        <Link href="/">
          <h1 className='text-gray-500 text-4xl font-["serif"] font-light'>Freetobechill</h1>
        </Link>
      </div>
    </header>
  )
}

export default HomeHeader
