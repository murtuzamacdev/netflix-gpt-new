import { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true)

    const handleFormToggle = () => {
        setSignInForm(!isSignInForm)
    }

    return (
        <div>
            <Header/>
            <input placeholder='Email' className='p-2 m-2  bg-yellow-100' />
                <input placeholder='Password' className='p-2 m-2  bg-yellow-100'/>
                <button className='bg-red-700 p-2 m-2 text-white' >Submit</button>
                <button className='p-2 m-2 text-black' onClick={handleFormToggle} >Sign {isSignInForm ? "In" : "Up"}</button>
        </div>
    )
}

export default Login