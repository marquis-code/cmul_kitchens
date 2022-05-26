import Head from 'next/head'
import Image from 'next/image'
// import Link from 'next/link';

export default function Home() {
    return (
        <div className='bg-green-900 max-w-7xl mx-auto'>
            <Head>
                <title>Cmul Kitchens - Home page</title>
                <meta name="description" content="Fast food home page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='lg:flex items-center py-9 w-11/12 mx-auto'>
                <div className='lg:w-6/12 '>
                    <h1 className='text-5xl text-white font-sans tracking-wider font-bold'>Order <span className='text-orange-300'>food</span> anytime, anywhere</h1>
                    <p className='text-white font-sans mt-6 text-center'>Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and frost!</p>
                </div>
                <div className='lg:w-6/12 flex justify-center items-center py-3'>
                    <Image blurDataURL='/food1.png'   quality={100} src='/food1.png' alt='food' height={300} width={300} />
                </div>
            </div>

            <div className='w-11/12 mx-auto bg-green-900 flex justify-center mt-9'>
                <div className='bw-6/12 py-3'>
                    <h1 className='text-4xl text-white font-sans font-bold text-center'>Special Meals of the day!</h1>
                    <p className='text-white font-sans mt-6 text-center'>Check our specials of the day and get discounts on all our meals and swift delivery to whatever location within CMUL.</p>
                </div>
            </div>

            <div className='w-11/12 mx-auto flex justify-center items-center mt-9'>
                <div className='lg:flex'>
                    <div className='flex flex-col justify-center items-center  mb-4 lg:my-0'>
                        <div><Image blurDataURL='/food1.png' quality={100} placeholder='blur' src='/food2.png' alt='food' height={200} width={200} /></div>
                        <h1 className='text-orange-200 font-sans font-semibold'>Burger Meal</h1>
                        <div className='w-9/12 '>
                            <p className='text-white text-center'>Stir fry pasta yada yada yada because of season</p>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center  mb-4 lg:my-0'>
                        <div><Image blurDataURL='/food1.png' quality={100} placeholder='blur' src='/food3.png' alt='food' height={200} width={200} /></div>
                        <h1 className='text-orange-200 font-sans font-semibold'>Meat Balls</h1>
                        <div className='w-9/12 '>
                            <p className='text-white text-center'>Stir fry pasta yada yada yada because of season</p>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div><Image blurDataURL='/food1.png' quality={100} placeholder='blur' src='/food4.png' alt='food' height={200} width={200} /></div>
                        <h1 className='text-orange-200 font-sans font-semibold'>Stir fry pasta</h1>
                        <div className='w-9/12 '>
                            <p className='text-white text-center'>Stir fry pasta yada yada yada because of season</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-11/12 mx-auto'>
                <div className='lg:flex justify-between items-center py-16'>
                    <div className='lg:w-6/12'>
                        <h1 className='text-orange-200 tracking-wider font-bold font-sans text-xl text-center lg:text-left'>Get notified when we update!</h1>
                        <p className='text-white font-sans mt-3'>Get notified when we add a new items to our specials menue, update our price list and have promos!</p>
                    </div>
                    <div className='lg:flex lg:w-5/12 my-3'>
                        <input type='email' placeholder='abahmarquis@gmail.com' className='border-2 my-3 lg:mt-0 rounded-lg py-2 w-full px-4 shadow-sm mr-1' />
                        <button className='w-full font-sans py-2 lg:py-0 bg-orange-200 rounded-lg shadow-sm font-semibold'>Get notified</button>
                    </div>
                </div>
            </div>


            <div className='bg-black'>
                <div className='lg:flex justify-between px-6 lg:px-16 py-6'>
                    <div className='space-y-3 mb-5'>
                        <h1 className='text-white font-sans font-semibold'>Company</h1>
                        <p className='text-white font-sans'>About Us</p>
                        <p className='text-white font-sans'>Careers</p>
                        <p className='text-white font-sans'>Contact Us</p>
                    </div>

                    <div className='space-y-3 mb-5'>
                        <h1 className='text-white font-sans font-semibold'>Support</h1>
                        <p className='text-white font-sans'>Help center</p>
                        <p className='text-white font-sans'>Safety Center</p>
                    </div>

                    <div className='space-y-3 '>
                        <h1 className='text-white font-sans font-semibold'>Legal</h1>
                        <p className='text-white font-sans'>Cookies Policy</p>
                        <p className='text-white font-sans'>Privacy Policy</p>
                        <p className='text-white font-sans'>Terms of Service</p>
                        <p className='text-white font-sans'>Dispute resolution</p>
                    </div>
                </div>
            </div>

            <div className='border-t-2 border-gray-500 bg-black'>
                <div className='lg:flex lg:px-16 justify-between items-center py-3 space-y-3 '>
                    <div className='text-white font-sans font-thin text-sm text-center'>@ 2022 CMUL Kitchens, All rights reserved</div>
                    <div className='flex space-x-2 justify-center'>
                        <div className='text-white font-sans font-semibold'>Instagram</div>
                        <div className='text-white font-sans font-semibold'>Twitter</div>
                        <div className='text-white font-sans font-semibold'>Youtube</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
