import React from 'react'
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import {Cart} from './';
import { useStateContext } from '@/context/StateContext';

import { urlFor } from '@/lib/client';

// console.log('hello');
// console.log(logo);

const Navbar = ({Navbar}) => {
  const {showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
{/* <Link href="/"> */}
<Link href="/">HAPS Furniture</Link>
{/* <img src={urlFor()} width={100} height={100}/> */}
{/* Haps Furniture */}
{/* Furniture */}
  {/* </Link> */}
      </p>
      <button type="button"
      className='cart-icon' onClick={() => setShowCart(true)}>
<AiOutlineShopping/>
<span className='cart-item-qty'>{totalQuantities}</span>
      </button>
     {showCart && <Cart/>}
    </div>
  )
}

export default Navbar