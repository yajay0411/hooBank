import React from 'react';
import { features } from "../constants/index.js";
import styles, { layout } from '../style.js';
import Button from "./Button";



export const FeatureCard = ({ icon, title, content }) => {
  return (
    <div className={`${styles.flexCenter} my-5 bg-black-gradient py-[10px] px-[10px] m-2 rounded-[20px] `}>
      <div className="bg-dimBlue p-[16px] flex justify-center items-center rounded-full mr-2">
        <img src={icon} className={`w-[100%] h-[100%]`} />
      </div>
      <div className='p-2'>
        <h1 className={`text-white font-poppins text-[18px] font-semibold `}>{title}</h1>
        <p className={`text-dimWhite font-poppins text-[16px] max-w-[400px]`}>{content}</p>
      </div>
    </div>
  )
}

const Business = () => {
  return (
    <div id="features" className={`${styles.flexCenter} max-w-[80%] md:flex-row flex-col my-20 mx-auto`}>
      <div className={`${styles.flexStart} flex-col mx-5`}>
        <h1 className='text-[48px] text-white font-poppins font-semibold my-2 leading-[60px]'>You do the business,<br className='sm:block hidden' /> we’ll handle the money.</h1>
        <p className='text-[18px] text-dimWhite max-w-[400px] my-1'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button
          Name={"get started"}
          classname={" bg-blue-gradient py-4 px-6 text-[18px] font-semibold font-poppins text-black capitalize rounded-[10px] my-5"}
        />
      </div>
      <div >
        {features.map((feature, index) => (<FeatureCard key={feature.id} {...feature} />))}
      </div>
    </div>
  )
}

export default Business
