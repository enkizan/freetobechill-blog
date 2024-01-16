
import Image from 'next/image';
import Link from 'next/link';


function HomeHeader() {
  return (


    <header className='my-10 flex items-center justify-center space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-3'>
        <Link href="/">
          <h1 className='text-gray-500 text-4xl font-["serif"] font-light'>Freetobechill</h1>
        </Link>
      </div>
    </header>
  )
}

export default HomeHeader
