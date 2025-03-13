import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  
  const onSubmitHandler = (e) => {
    e.preventDefault();

  }

  return (
    <div className='bg-gray-900 flex flex-col items-center justify-center text-gray-800 min-h-screen fixed top-0  w-full '>
    
      <NavLink to='/' className='absolute top-0 left-0'>
        <h1 className='text-gradient px-4 py-4 text-xl font-medium'>lajest.</h1>
      </NavLink>
      
      <form onSubmit={onSubmitHandler} className='bg-gray-50 flex mx-4 flex-col items-center sm:w-[90%] lg:w-[30%] text-gray-90 px-5 py-4 pb-8 gap-5 shadow-2xl rounded-[30px]'>
        <div>
          <p className='text-gray-900 text-xl font-medium'>{currentState}</p>
        </div>
         
        <div className='flex items-center justify-center gap-1 w-full border bg-gray-50 px-2 py-2  shadow-sm cursor-pointer rounded-[30px]'>
          <img className='w-5' src={assets.google_logo} />
          {currentState === "Login"?
            <p className='text-[13px] font-medium'>Sign In with google </p>
          : <p className='text-[13px] font-medium'>Sign Up with google</p>}
        </div>
        <div className='flex items-center gap-2 mx-2'>
          <p className='w-40 h-[1px] bg-gray-300'></p>
          <p>or</p>
          <p className='w-40 h-[1px] bg-gray-300'></p>
        </div>
        <div>
          {currentState ==='Login'?'':<input type="text" className="bg-gray-100 w-full py-2 px-3 border border-gray-300 mb-2 outline-slate-600 rounded-[30px]" placeholder="Your name" required/>}
          <input type="email" className="bg-gray-100 w-full py-2 mb-2 px-3 border border-gray-300 outline-slate-600 rounded-[30px]" placeholder="Your email" required/>
          <input type="password" className="bg-gray-100 w-full mb-2 py-2 px-3 border border-gray-300 outline-slate-600 rounded-[30px]" placeholder="Your password" required/>

          {
              currentState ==='Login'?''
              :
              <div className='flex items-center gap-1'>
                <input type='checkbox' required className='cursor-pointer'/>
                <p className='text-[13px] font-medium'>I Agree to the Terms and Privacy Policy of lajest</p>
              </div>
          }
          <div className="w-full flex justify-between text-sm mt-2">
            {
              currentState === 'Login'? 
              <p className="cursor-pointer">Forgort password?</p>: ''
            }
   
          </div>
          <button className="bg-slate-800 w-full text-white py-2 px-3 mt-2 rounded-[30px]">
            {
              currentState === 'Login'?
              "Login":
              "Sign Up"
            }
          </button>
          {
              currentState === 'Login'?
              <p onClick={() =>setCurrentState("Sign Up")} className="flex justify-center gap-1 text-sm cursor-pointer mt-4 font-medium text-slate-900">
                Don't have an account? 
                <span className='text-blue-950'>Create Account</span>
                </p>:
              <p onClick={() =>setCurrentState("Login")} className="flex justify-center text-sm text-slate-900 font-medium gap-1 cursor-pointer mt-4">
                Already have an account?
                <span className='text-blue-950'>Login Here</span>
                </p>
          }
        </div>
      </form>
  
    </div>
  )
}

export default Login