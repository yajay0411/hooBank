import React from 'react';
import styles from "../style.js";
import { discount, robot } from "../assets/index.js";
import GetStarted from './GetStarted.jsx';

const Hero = () => (
    <section id="product" className={`${styles.flexCenter} md:flex-row flex-col py-5 sm:py-0 mx-auto`}>
        <div className={`flex-1 ${styles.flexStart} flex-col sm:px-16 px-6 `}>
            <div className='flex flex-row items-center px-4 bg-discount-gradient rounded-[10px] mb-2 '>
                <img src={discount}
                    alt="discount"
                    className='w=[32px] h-[32px]'></img>
                <p className={`${styles.paragraph} ml-2`}>
                    <span className='text-white font-semibold'>20% </span>
                    DISCOUNT FOR
                    <span className='text-white font-semibold'> 1 MONTH </span>
                    ACCOUNT
                </p>
            </div>
            <div className='flex flex-row justify-between items-center w-[80%] '>
                <h1 className='flex-1 font-poppins font-semibold  sm:text-[72px] text-[36px] text-white '>
                    The Next <br className='sm:block ' />{" "}
                    <span className="text-gradient">Generation</span><br className='sm:block ' />
                </h1>
                <div className='sm:flex hidden sm:m-10 m-1 '>
                    <GetStarted />
                </div>
            </div>
            <h1 className='font-poppins font-seminbold  sm:text-[68px] text-[36px] text-white w-full'>Payment Method.</h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                We examine annual percentage rates, annual fees.</p>
        </div>

        <div className={`flex-1 ${styles.flexCenter} my-10 relative`}>
            <img
                src={robot}
                alt="billing"
                className='w-[100%] h-[100%] relative z-[5]' />
            <div className='absolute z-[0] w-[40%] h-[40%] top-0 pink__gradient' />
            <div className='absolute z-[1] w-[80%] h-[80%] top-20 blue__gradient' />
            <div className='absolute z-[2] w-[20%] h-[20%] bottom-30 white__gradient' />
            <div className='absolute z-[3] w-[80%] h-[80%] right-20 bottom-40 blue__gradient' />
        </div>
        <div className={`${styles.flexCenter}`}>
            <div className='sm:hidden flex md:mr-4 mr-0'>
                <GetStarted />
            </div>
        </div>
    </section>
)


export default Hero
