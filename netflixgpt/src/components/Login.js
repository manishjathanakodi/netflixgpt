import React from 'react'
import Header from './Header'


const Login = () => {
    const [isSignUpForm, setIsSignUpForm] = React.useState(false)
    const toggleSignUpForm = () => {
        setIsSignUpForm(!isSignUpForm)
    }
    return (
        <div >
            <Header />

            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='body ' />

            </div>
            {/* <div className='flex justify-center items-center'> */}
            <form className='flex flex-col md:w-3/12 absolute bg-black bg-opacity-80 p-12 mx-auto my-36 right-0 left-0 text-white rounded-lg'>
                <h1 className='font-bold text-3xl p-2'>{isSignUpForm ? 'Sign Up' : 'Sign In'}</h1>
                {isSignUpForm&& <input type='text' placeholder='Full Name' className='p-2 m-4 bg-[#333333]' />}
                <input type='text' placeholder='Email Address' className='p-2 m-4 bg-[#333333]' />
                <input type='password' placeholder='Password' className='p-2 m-4 bg-[#333333] ' />
                <button className='p-2 m-2 bg-red-600 text-white rounded-lg'>{isSignUpForm ? 'Sign Up' : 'Sign In'}</button>
                {
                    isSignUpForm ? <p className='p-2 mt-4'>Already have an account? <span onClick={toggleSignUpForm} className='text-decoration-line: underline cursor-pointer'>Sign In</span></p> : <p className='p-2 mt-4' >New to Netflix? <span onClick={toggleSignUpForm} className='text-decoration-line: underline cursor-pointer'>Sign Up </span>now</p>
                }

            </form>
            {/* </div> */}

        </div>
    )
}

export default Login