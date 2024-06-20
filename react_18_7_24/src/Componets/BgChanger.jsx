import React, { useState } from 'react'

const BgChanger = () => {

    const [color, setColor] = useState('olive')
    return (
        <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
            <h1>i am backgrounColor</h1>
            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-5 px-2'>
                <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>
                    <button className='text-white px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "red" }} onClick={() => setColor('red')}>Red</button>
                    <button className='text-white px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "green" }} onClick={() => setColor('green')}>Green</button>
                    <button className='text-white px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "blue" }} onClick={() => setColor('blue')}>Blue</button>
                    <button className='text-white px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "olive" }} onClick={() => setColor('olive')}>Olive</button>
                    <button className='text-white px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "gray" }} onClick={() => setColor('gray')}>Gray</button>
                    <button className='text-black px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "yellow" }} onClick={() => setColor('yellow')}>Yellow</button>
                    <button className='text-black px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "pink" }} onClick={() => setColor('pink')}>Pink</button>
                    <button className='text-white px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "purple" }} onClick={() => setColor('purple')}>Purple</button>
                    <button className='text-black px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "lavender" }} onClick={() => setColor('lavender')}>Lavender</button>
                    <button className='text-black px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "white" }} onClick={() => setColor('white')}>White</button>
                    <button className='text-white px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "black" }} onClick={() => setColor('black')}>Black</button>
                </div>
            </div>
        </div>
    )
}

export default BgChanger