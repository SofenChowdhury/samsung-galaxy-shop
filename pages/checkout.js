import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { UseStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';
import { urlFor } from '../lib/client';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping, AiFillContacts, AiFillMobile, AiFillProfile, AiFillHome } from 'react-icons/ai';
import {TiDeleteOutline } from 'react-icons/ti';

const checkout = () => {
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = UseStateContext();


    return (
        <div className='products-container'>
            <div ref={cartRef}>
                <h2 class="title">Customer Info</h2>
                <div class="input-field">
                <i class="fas fa-user"><AiFillContacts /></i>
                <input type="text" placeholder="Name" />
                </div>
                <div class="input-field">
                <i class="fas fa-mobile"><AiFillMobile /></i>
                <input type="number" placeholder="Mobile" />
                </div>
                <div class="input-field">
                <i class="fas fa-note"><AiFillProfile /></i>
                <input type="text" placeholder="Note" />
                </div>
                <div class="input-field">
                <i class="fas fa-address"><AiFillHome /></i>
                <input type="text" placeholder="Address" />
                </div>
                <div class="title">
                    <label for="shops">Select Shop:</label>
                    <select className='select-icon' name="shops" id="shops">
                        <option value="">Select</option>
                        <option value="saab">Fair Electronics</option>
                        <option value="opel">Fair Mart</option>
                        <option value="audi">Xcel</option>
                    </select>
                </div>
                {cartItems.length >= 1 && (
                <h2 class="title">Order Info</h2>
                )}
                <div className='product-container'>
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
                    {cartItems.length >= 1 && (
                    <div className='product'>
                        <div className='item-desc'>
                            <div className='flex top'>
                                <p>
                                    <h5>Subtotal: &nbsp;&nbsp; TK{totalPrice}</h5>
                                    <h5>VAT: &nbsp;&nbsp; TK</h5>
                                    <h5>Payable: &nbsp;&nbsp; TK</h5>
                                    <h5>Payment Methods:
                                        <select className='select-icon' name="shops" id="shops">
                                            <option value="">Select</option>
                                            <option value="saab">COD</option>
                                            <option value="saab">bKash</option>
                                            <option value="opel">Tap</option>
                                        </select>
                                    </h5>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    )}
                    
                    {cartItems.length >= 1 && (
                    <Link href='/success'>
                        <button type='button'  className='btn'>
                            Place Order
                        </button>
                    </Link>
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default checkout