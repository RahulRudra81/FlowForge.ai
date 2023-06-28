// import React from 'react';
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,
//   MDBInput
// } from 'mdb-react-ui-kit';

// export default function Footer() {
//   return (
//     <MDBFooter bgColor='dark' className='text-center text-white text-lg-left'>
//       <MDBContainer className='p-4 pb-0'>
//         <form action=''>
//           <MDBRow className='d-flex justify-content-center'>
//             <MDBCol size='auto' className='mb-4 mb-md-0'>
//               <p className='pt-2'>
//                 <strong>Sign up for our newsletter</strong>
//               </p>
//             </MDBCol>

//             <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
//               <MDBInput type='text' id='form5Example2' label='Email address' contrast />
//             </MDBCol>

//             <MDBCol size='auto' className='mb-4 mb-md-0'>
//               <MDBBtn outline color='light'>
//                 Subscribe
//               </MDBBtn>
//             </MDBCol>
//           </MDBRow>
//         </form>
//       </MDBContainer>

//       <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         &copy; {new Date().getFullYear()} Copyright:{' '}
//         <a className='text-white' href='https://mdbootstrap.com/'>
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-10">
      <div className="container mx-auto flex justify-between items-center ">
      <div className="">
                        <Link to='/'> <h1 className="text-4xl font-bold  m-2  cursor-pointer "><span className=''>Avid</span><span className='text-[#33bbcf]'>Synth</span></h1></Link>
                    </div>
        <div className="flex space-x-4">
          <Link to="" className="text-gray-600 hover:text-gray-800 hover:underline decoration-[#33bbcf]">Contact</Link>
          <Link to="/help" className="text-gray-600 hover:text-gray-800 hover:underline decoration-[#33bbcf]">FAQ</Link>
        </div>
      </div>
        <p className="text-gray-600 mt-4 text-center">
          &copy; {new Date().getFullYear()}   AvidSynth. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer;

