import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

function StudioNavbarTest() {
  return (
    <div className='bg-[#141419]'>
      <div className='flex items-center justify-between p-5'>
            <Link href="/" className='text-teal-300 flex items-center'>
              {/* <ArrowUturnLeftIcon className="h-5 w-5 text-teal-300 mr-2" /> */}
              <div className="text-5xl" >Back to website</div>
            </Link>
        </div> 
    </div>
  )
}

export default StudioNavbarTest
