import React, { useCallback, useEffect, useRef, useState } from 'react'

const PassWordGenrator = () => {

    const [length, setLength] = useState(8);
    const [nuberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState(false);

    //How to copy inputText 
    //useRef Hook
    const passworfRef = useRef(null);

    const passwordGenrator = useCallback(() => {
        console.log("i am useCallback");
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZa bcdefghijklmnopqrstuvwxyz"

        if (nuberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*( )-_=+\|[]{}/?~"

        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)
    }, [length, nuberAllowed, charAllowed, setPassword])


    const copPasswordToClipboard = useCallback(() => {
        passworfRef.current?.select();
        passworfRef.current?.setSelectionRange(0, 100)
        window.navigator.clipboard.writeText(password)

    }, [password])

    useEffect(() => {
        console.log("i am useEffcet");
        passwordGenrator();
    }, [length, nuberAllowed, charAllowed, passwordGenrator])


    return (
        <>
            <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg p-6 my-8 text-orange-500 bg-gray-700'>
                <h1 className='text-white text-center'>PassWord Genrator</h1>

                <div className='w-full max-w-2xl mx-auto rounded-lg p-6  text-orange-500 bg-gray-700 flex'>
                    <input
                        type='text'
                        value={password}
                        className='password-input outline-none w-full p-2 rounded-l-lg'
                        placeholder='Password'
                        readOnly
                        ref={passworfRef}
                    />
                    <button
                        onClick={copPasswordToClipboard}
                        className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0 rounded-r-lg'>Copy</button>
                </div>

                <div className=' w-full max-w-2xl flex text-sm gap-x-2 justify-center px-6'>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type="range"
                            min={6}
                            max={100}
                            value={length}
                            className='cursor-pointer'
                            onChange={(e) => setLength(e.target.value)} />
                        <label className='text-base'>Lenght : {length}</label>
                    </div>

                    <div className='flex items-center gap-x-1'>
                        <input
                            type="checkbox"
                            defaultChecked={nuberAllowed}
                            id='numberInput'
                            className='cursor-pointer'
                            onChange={() => setNumberAllowed(!nuberAllowed)}
                        />
                        <label className='text-base'>Number</label>
                    </div>

                    <div className='flex items-center gap-x-1'>
                        <input
                            type="checkbox"
                            defaultChecked={charAllowed}
                            id='charInput'
                            className='cursor-pointer'
                            onChange={() => setCharAllowed(!charAllowed)}
                        />
                        <label className='text-base'>Characters</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PassWordGenrator