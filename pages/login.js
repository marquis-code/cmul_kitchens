// import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
const Login = () => {
    return (
      <>
       <Head>
         <title>Fast Food - Login page</title>
     </Head>
      <div className='flex items-center'>
          <div className='w-6/12'><Image quality={100} placeholder='blur' blurDataURL='/food1.png' src='/Group13.png' height={562} width={560} alt='signup' /></div>
          <div className='w-6/12 pr-16'>
              <div className='flex justify-center items-center mb-10'>
                  <h1 className='font-semibold text-green-900 text-xl'>Welcome Back!</h1>
              </div>
              <form>
                  <div className=''>
                      <input className='outline-none pl-6 my-3 border w-full py-3 rounded-md' type='email' name='email' placeholder='Your Email Address' />
                  </div>

                  <div className=''>
                      <input className='outline-none pl-6 my-3 border w-full py-3 rounded-md' type='password' name='password' placeholder='Your Password' />
                  </div>
                 <div className='mt-6'>
                    <button className='w-full py-2 bg-green-900 rounded-md text-orange-200 font-semibold shadow-sm'>Login</button>
                 </div>
                  <div className='flex justify-between items-center mt-6'>
                     <div className='text-green-900 text-sm hover:underline cursor-pointer font-semibold'>Create an account</div>
                     <div className='text-green-900 text-sm hover:underline cursor-pointer font-semibold'>Forgot password ?</div>
                  </div>
              </form>
          </div>
      </div>
      </>
    )
}

export default Login;