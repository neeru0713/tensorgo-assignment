import React from 'react'
import { Checkout } from './Checkout'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'

export const Cart = () => {
    const cartData = useSelector((state) => state.cart.cart)
  return (
    <div className='cart-wrapper flex h-screen flex-col'>
        <h1 className='text-3xl font-bold text-orange-500 px-10 pt-10'>Your Cart</h1>
        <div className='flex overflow-scroll'>
        <div className='cart-section w-[70%] flex flex-col p-10 gap-2'>
            {cartData?.map((item,index) => (
                <CartItem data={item} index={index}/>
            ))}
        </div>

        <div className='checkout-section w-[30%]'>
            <Checkout/>
        </div>

        </div>
       

    </div>
  )
}
