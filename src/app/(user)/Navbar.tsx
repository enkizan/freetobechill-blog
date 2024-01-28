
import Link from 'next/link';
import { useState } from 'react';
import {draftMode} from 'next/headers'

function Navbar() {
  // const [previewModeState,setPreviewModeState] = useState(true)
  // const handlePreviewMode = () => {
  //   if(!previewModeState){
  //     setPreviewModeState(true)
  //     draftMode().enable();
  //   }else{
  //     setPreviewModeState(false)
  //     draftMode().disable();
  //   }
  // }

  return (
    <div>
      <div className=" my-5 flex items-center justify-center p-3 space-x-2 text-1xl text-black font-['serif'] font-light">
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
           ">Cheung Fan's Blog</p>
          </Link>
        <Link href="/author/abi">
          <p className="
                    mx-8 
                    hover:scale-110
                    transition-transform 
                    duration-200 
                    ease-out
                    cursor-pointer
          ">Abi's Blog</p>
          </Link>
        <Link href="/author/winwinho">
          <p className="
                    mx-8 
                    hover:scale-110
                    transition-transform 
                    duration-200 
                    ease-out
                    cursor-pointer
          ">Win win Ho's Blog </p>
          </Link>
        <Link href="/author/tung-san">
        <p className="
                  mx-8 
                  hover:scale-110
                  transition-transform 
                  duration-200 
                  ease-out
                  cursor-pointer
        ">Tung San's Dev test </p>
        </Link>
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
