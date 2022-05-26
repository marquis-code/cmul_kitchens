import Image from 'next/image';

const Cart = () => {
    return (
        <>
          <div className='flex justify-end rounded-lg shadow-sm'>
          <div className='p-10 w-6/12 absolute rounded-lg shadow-sm bg-white z-50 mr-3 mt-3'>
                        <div className='font-sans text-2xl text-green-900 font-semibold'>Your Cart</div>
                        <div className='flex justify-between pt-6'>
                            <div className='font-sans text-gray-400 text-base font-semibold w-5/12'>Item</div>
                            <div className='font-sans text-gray-400 text-base font-semibold w-1/12 text-center'>Qty</div>
                            <div className='font-sans text-gray-400 text-base font-semibold w-2/12 text-center'>Price</div>
                            <div className='font-sans text-gray-400 text-base font-semibold w-2/12 text-center'>Status</div>
                        </div>
                        <div className='flex justify-between items-center pt-6'>
                            <div className='flex items-center w-5/12'>
                                <div className='pr-4'><Image src='/food2.png' quality={100} blurDataURL='/food1.png' placeholder='blur' alt='food' height={70} width={70} /></div>
                                <div>
                                    <h1 className='text-green-900 font-sans font-semibold'>Stir Fry Pasta</h1>
                                    <p className='text-red-500 cursor-pointer font-sans font-semibold'>Remove</p>
                                </div>
                            </div>
                            <div className='text-green-900 font-semibold font-sans w-1/12 text-center'>3</div>
                            <div className='text-green-900 font-semibold font-sans w-2/12 text-center'>N 1,000.00</div>
                            <div className='text-green-500 w-2/12 font-semibold text-center'>Delivered</div>
                        </div>

                    </div>
          </div>
        </>
    )
}

export default Cart;