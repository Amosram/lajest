import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  
  const onSubmitHandler = (e) => {
    e.preventDefault();

  }

  return (
    <div className='bg-gray-900 flex flex-col items-center justify-center text-gray-800 min-h-screen fixed top-0  w-full'>
    
      <NavLink to='/' className='absolute top-0 left-0'>
        <h1 className='text-gradient px-4 py-4 text-xl font-medium'>lajest.</h1>
      </NavLink>
      
      <form onSubmit={onSubmitHandler} className='bg-gray-200 flex mx-4 flex-col items-center sm:w-[90%] lg:w-[40%] text-gray-90  px-5 py-4 pb-8 gap-5 shadow-2xl'>
        <div>
          <p className='text-gray-900 text-xl font-medium'>{currentState}</p>
        </div>
         
        <div className='flex items-center gap-1 border bg-gray-100 px-2 py-1  shadow-sm cursor-pointer'>
          <img className='w-6' src={assets.google_logo} />
          {currentState === "Login"?
            <p>Sign in with google </p>
          : <p>Sign up with google</p>}
        </div>
        <div className='flex items-center gap-2'>
          <p className='w-20 h-[1px] bg-gray-400'></p>
          <p>or</p>
          <p className='w-20 h-[1px] bg-gray-400'></p>
        </div>
        <div>
          {currentState ==='Login'?'':<input type="text" className="bg-gray-100 w-full py-2 px-3 border border-gray-300 mb-2 outline-orange-200" placeholder="Your name" required/>}
          <input type="email" className="bg-gray-100 w-full py-2 mb-2 px-3 border border-gray-300 outline-orange-200" placeholder="Your email" required/>
          <input type="password" className="bg-gray-100 w-full mb-2 py-2 px-3 border border-gray-300 outline-orange-200" placeholder="Your password" required/>

          {
              currentState ==='Login'?''
              :
              <div className='flex items-center gap-1'>
                <input type='checkbox' required/>
                <p className='text-sm'>Terms and conditions apply</p>
              </div>
          }
          <div className="w-full flex justify-between text-sm mt-2">
            <p className="cursor-pointer">Forgort password?</p>
            {
              currentState === 'Login'?
              <p onClick={() =>setCurrentState("Sign Up")} className="cursor-pointer">Create Account</p>:
              <p onClick={() =>setCurrentState("Login")} className="cursor-pointer">Login Here</p>
            }
          </div>
          <button className="bg-orange-400 w-full text-white py-2 px-3 mt-2">
            {
              currentState === 'Login'?
              "Login":
              "Sign Up"
            }
          </button>
        </div>
      </form>
  
    </div>
  )
}

export default Login