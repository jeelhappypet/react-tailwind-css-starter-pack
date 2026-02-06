import React from 'react'
import {useState, useEffect} from 'react'

const Cart = () => {
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)
    useEffect(() => {
    }, [count])

    if (count < 0) {
        setCount(0)
        window.alert('Quantity cannot be less than 0')
    }

    


  return (
    <div className='min-h-screen min-w-screen flex flex-col space-y-4 items-center justify-center px-5'>
        <h1 className='font-semibold text-2xl'>Cart</h1>
        <div className='flex flex-row items-center px-[30px] text-xl font-bold w-full justify-between border-2 border-black'>
            <h1>No</h1>
            <h1>Item Name</h1>
            <h1>Price($)</h1>
            <h1>Quantity</h1>            
            <h1>Total</h1>          
        </div>
        <div className='flex flex-row items-center px-[30px] text-xl font-bold w-full justify-between border-2 border-black'>
            <h1>1</h1>
            <h1>Butter</h1>
            <h1>50</h1>
           <div className='flex space-x-4'>
            <button onClick = {() => setCount((c) => c - 1)} className='border-2 border-black w-8 text-2xl'>-</button>
            <span className='border-2 border-black w-8 text-2xl text-center'>{count}</span>
            <button className='border-2 border-black w-8 text-2xl' onClick = {() => setCount((c)=> c + 1)}>+</button>
            </div>          
            <h1>{total}</h1>
        </div>
        
      
    </div>
  )
}

export default Cart
