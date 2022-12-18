import React from 'react';
import styles from "../style.js";
import { feedback } from '../constants/index.js';
import { quotes } from '../assets';




export const TestimonialsCard = ({ content, name, img, title }) => (
    <div className={`${styles.flexStart} flex-col ss:flex-row ss:items-center md:flex-col bg-black-gradient p-3 rounded-[20px] m-5`}>
        <div>
            <img src={quotes} className="w-[30px] m-5" />
            <p className='text-[18px] text-white w-[200px] m-5'>{content}</p>
        </div>
        <div className={`${styles.flexCenter} `}>
            <div>
                <img src={img} className="w-[48px] h-[48px] m-5" />
            </div>
            <div>
                <h1 className='text-white text-[20px] '>{name}</h1>
                <p className='text-dimWhite text-[16px]'>{title}</p>
            </div>
        </div>
    </div>
)

const Testimonials = () => {
    return (
        <div id="clients" className={`${styles.flexCenter} flex-col my-20 w-full`}>
            <div className={`flex md:flex-row  flex-col justify-between items-center `}>
                <h1 className='font-poppins text-white text-[48px] font-semibold p-5 mx-5'>What people are saying about us</h1>
                <p className='font-poppins text-dimWhite text-[18px]  p-5 mx-5 font-normal w-[400px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className={`${styles.flexCenter} flex-col md:flex-row mx-10`} >
                {feedback.map((feed, index) => (<TestimonialsCard key={feed.id} {...feed} />))}
            </div>
        </div>

    )
}

export default Testimonials
