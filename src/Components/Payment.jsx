import React from 'react'
import { LOGO } from '../utils/constants'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
    const navigate=useNavigate();
return (
<>
    <div className="absolute w-screen px-8 py-2  ">
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" width={120} />
        <hr />

        <div className='flex justify-center my-12 w-auto '>
            <div>
            <div class="stepLogoContainer"><span class="stepLogo paymentStepLogo"></span></div>
                <p className='mt-16 text-center '> STEP 3 OF 3</p>
                <p className='text-3xl font-bold text-center'>Choose how to pay</p>


                <p className='text-xl mt-2 font-light'>Your payment is encrypted and you can change your
                </p>
                <p className='text-xl font-light  text-center'>
                    payment method at anytime.</p>
                <p className='text-xl font-bold mt-3  text-center'>Secure for peace of mind.</p>
                <p className='text-xl font-bold   text-center'>Cancel easily online.</p>
                <div className='justify-end mb-1 text-xs pt-3 text-right mt-6  flex '>
                    <svg id="secure-server-icon" viewBox="0 0 12 16"
                        className="w-3">
                        <g fill="none">
                            <g fill="#FFB53F">
                                <path
                                    d="M8.4 5L8.4 6.3 10 6.3 10 5C10 2.8 8.2 1 6 1 3.8 1 2 2.8 2 5L2 6.3 3.6 6.3 3.6 5C3.6 3.7 4.7 2.6 6 2.6 7.3 2.6 8.4 3.7 8.4 5ZM11 7L11 15 1 15 1 7 11 7ZM6.5 11.3C7 11.1 7.3 10.6 7.3 10.1 7.3 9.3 6.7 8.7 6 8.7 5.3 8.7 4.7 9.3 4.7 10.1 4.7 10.6 5 11.1 5.5 11.3L5.2 13.4 6.9 13.4 6.5 11.3Z" />
                            </g>
                        </g>
                    </svg>
                    <div className="pt-1 px-1">End-to-end encrypted</div>
                </div>
                <div className='cursor-pointer  p-6 border border-gray-300 rounded-md flex' >
                    <p className='font-light text-md'>Credit or Debit Card

                    </p>
                    <span className=" flex mx-6 " data-uia="cardLogos-comp"
                        aria-label="We accept VISA, MASTERCARD, AMEX and DINERS.">
                        <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png"
                            alt="VISA" className="mx-3"
                            srcSet="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA@2x.png 2x"
                            data-uia="logoIcon-VISA" />
                        <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png"
                            alt="MASTERCARD" className="mx-3"
                            srcSet="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD@2x.png 2x"
                            data-uia="logoIcon-MASTERCARD" />
                        <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX.png"
                            alt="AMEX" className="mx-3"
                            srcSet="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX@2x.png 2x"
                            data-uia="logoIcon-AMEX" />
                        <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DINERS.png"
                            alt="DINERS" className="logoIcon DINERS default-ltr-cache-kg1rox e18ygst00"
                            srcSet="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DINERS@2x.png 2x"
                            data-uia="logoIcon-DINERS" />
                    </span>

                    <span
                    onClick={navigate('signup/card-payment')}
                    className='font-extralight text-2xl '><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </span>

                </div>



            </div>
        </div>
    </div>



</>
)
}

export default Payment
