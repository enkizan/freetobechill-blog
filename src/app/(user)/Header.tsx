'use client'

import { Button, Drawer } from '@geist-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuDrawer from '@/components/MenuDrawer';



function HomeHeader() {
  const [state, setState] = React.useState(false)
  return (

    <header className='my-10 flex items-center justify-center space-x-2 font-bold px-10 py-5'>
      <div className='relative flex items-center justify-center space-x-3 w-full'>
        <div className='        
        absolute 
        left-0 
        '>
          <MenuDrawer />

        </div>

        <Link href="/">
          <h1 className='text-gray-500 text-4xl font-["serif"] font-light'>Freetobechill</h1>
        </Link>
      </div>
    </header>
  )
}

export default HomeHeader
