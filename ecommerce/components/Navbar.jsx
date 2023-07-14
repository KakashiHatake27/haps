import React from 'react'
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { urlFor } from '@/lib/client';

// console.log('hello');
// console.log(logo);

const Navbar = ({Navbar}) => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
{/* <Link href="/"> */}

{/* <img src={urlFor()} width={100} height={100}/> */}
Haps Furniture
{/* Furniture */}
  {/* </Link> */}
      </p>
      <button type="button"
      className='cart-icon' onclick="">
<AiOutlineShopping/>
<span className='cart-item-qty'>1</span>
      </button>
    </div>
  )
}

export default Navbar