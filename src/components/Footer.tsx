import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer() {
  return (
    <div className=' 
    flex
    justify-between
    mx-10
    mb-10 
    ' >
        <div className='indent-3'>
            <InstagramIcon color="action" className='cursor-pointer'/>
            <FacebookIcon color="action"  className='cursor-pointer' />
        </div>
      <div className="
          text-end
          font-extralight
          text-stone-500
          drop-shadow-md
          subpixel-antialiased
      ">
        Created by Freetobechill.
        </div>
    </div>
  )
}

export default Footer
