const Checkout = () => {
    return (
        <>
            <div className='flex justify-end'>
                <form>
                    <div className='p-10 w-5/12 absolute rounded bg-white border-2 border-red-500'>
                        <div className='font-sans text-2xl text-green-900 font-sans py-6 font-thin'>Checkout</div>
                        <div className='py-3'>
                            <input type='number' placeholder='Card Number' className='w-full py-3 px-3 border placeholder-green-900 font-sans rounded select-none outline-none' />
                        </div>

                        <div className='py-3'>
                            <input type='date' placeholder='Exp Date' className='w-full py-3 px-3 border placeholder-green-900 font-sans rounded select-none outline-none' />
                        </div>

                        <div className='py-3'>
                            <input type='number' placeholder='CVV/CVV2' className='w-full py-3 px-3 border placeholder-green-900 font-sans rounded select-none outline-none' />
                        </div>

                        <div className='py-3'>
                            <input type='text' placeholder='Card Number' className='w-full py-3 px-3 border placeholder-green-900 font-sans rounded select-none outline-none' />
                        </div>

                        <div className='pt-6 flex justify-center items-center'><button className='text-orange-300 w-full py-3 rounded bg-green-900 font-semibold'>Make Payment</button></div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Checkout;