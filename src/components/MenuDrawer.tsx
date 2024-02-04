'use client'

import { Button, Drawer } from '@geist-ui/core';
import Link from 'next/link';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function MenuDrawer() {
    
    const [state, setState] = React.useState(false)
  return (
<div className='        
        block 
        md:hidden'>

    <MenuIcon className='
        cursor-pointer 
        hover:scale-110 

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

</div>
  )
}

export default MenuDrawer
