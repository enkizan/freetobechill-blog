import Image from 'next/image';

function MyLogo(props: any) {
    const { renderDefault, title } = props;

  return (
    <div className='flex items-center space-x-2'>
        {/* <Image 
              className='rounded-full object-cover'
              width={50}
              height={50}
              src='https://links.papareact.com/1m8'
              alt='logo' 
              /> */}
              <div className='text-5xl'>testing</div>
        <>{renderDefault(props)}</>
    </div>
  );
}

// function MyLogo(props:any) {
// 	// LogoProps includes the title from project config by default
//   const { renderDefault, title } = props;
// 	// Overwrite the value of `title` after spreading the props object
//   return renderDefault({...props, title: title.toUpperCase() });
// }

// function MyLogo(props:any) {
//   return (
//     <div style={{ border: '3px solid skyblue', padding: 4 }}>
//       {props.renderDefault({ ...props, title: props.title?.toUpperCase() })}
//     </div>
//   )
// }


export default MyLogo;