import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { UseStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';
import { urlFor } from '../lib/client';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import {TiDeleteOutline } from 'react-icons/ti';

const checkout = () => {
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = UseStateContext();

  return (
    <div className='' ref={cartRef}>
        <div className='product-container'>
            <div className='product'>
            <div className='item-desc'>
            <div className='flex top'>
                <h5>Customer Name: <input type='text' /></h5>
                <h5>Customer Mobile: <input type='number' /></h5>
                <h5>Customer Dis: <input type='text' /></h5>
                <h5>Customer Thana: <input type='text' /></h5>
                <h5>Customer Address: <input type='text' /></h5>
                <h5>Select Shop: 
                    <dropdown>
                        <select>Fair Electronics</select>
                    </dropdown>
                </h5>
            </div>
            </div>
            </div>
            {/* <div className='product-container'> */}
                {cartItems.length >= 1 && cartItems.map((item) => (
                    <div className='product' key={item._id}>
                        <img src={urlFor(item?.image[0])} className='cart-product-image' />
                        <div className='item-desc'>
                            <div className='flex top'>
                                <h5>{item.name}</h5>
                                <h4>{item.price}</h4>
                            </div>
                            <div className='flex bottom'>
                                <div>
                                <p className='quantity-desc'>
                                    <span className='minus' onClick={() => 
                                        toggleCartItemQuantity(item._id, 'dec')
                                    }>
                                        <AiOutlineMinus />
                                    </span>
                                    <span className='num'>
                                        {item.quantity}
                                    </span>
                                    <span className='plus' onClick={() => 
                                        toggleCartItemQuantity(item._id, 'inc')
                                    }>
                                        <AiOutlinePlus />
                                    </span>
                                </p>
                                </div>
                                <button
                                type='button'
                                className='remove-item'
                                onClick={() => onRemove(item)}
                                >
                                <TiDeleteOutline />
                                </button>
                            </div>
                        
                            
                        </div>
                    </div>
                
                ))}
            {/* </div> */}
               
            {cartItems.length >= 1 && (
                <div className='product'>
                    <div className='item-desc'>
                        <div className='flex top'>
                            <h5>Subtotal:</h5>
                            <h5>TK{totalPrice}</h5>
                            <h5>VAT:</h5>
                            <h5>TK</h5>
                            <h5>Payment Methods:
                                <dropdown>
                                    <select>Bkash</select>
                                </dropdown>
                            </h5>
                            
                        </div>
                    </div>
                </div>
            )}
  
            <Link href='/success'>
                <button type='button' width='400px' className='btn'>
                    Place Order
                </button>
            </Link>
        </div>
    </div>
  )
}

export default checkout