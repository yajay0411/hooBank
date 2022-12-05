import React from 'react';
import styles from '../style';
import bill from "../assets/bill.png"
import Button from "./Button";
import { apple, google } from "../assets"


const Billing = () => (
  <div className={`${styles.flexCenter}  w-full md:flex-row flex-col-reverse  my-15 mx-auto relative`}>

    <div className={`${styles.flexCenter} max-w-[600px] mx-10`} >
      <img src={bill} alt="billing image" className='w-[100%] h-[100%] z-[5] ' />
      <div className='absolute z-[2] w-[100%] h-[50%] -left-1/2 top-0 blue__gradient rounded-full' />
      <div className='absolute z-[3] w-[50%] h-[20%] top-0  white__gradient rounded-full' />
    </div>
    <div className={` flex-col z-[5]  mx-10 `}>
      <h1 className='font-poppins text-white text-[48px] font-semibold '>Easily control your<br className=' md:block hidden' /> billing & invoicing.</h1>
      <p className='font-poppins text-dimWhite text-[18px] max-w-[400px] font-normal'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
      <div className='flex '>
        <Button
          iconStyle={"w-[150px] my-5 mx-5"}
          icon={apple}
        />
        <Button
          iconStyle={"w-[150px] my-5 mx-5"}
          icon={google}
        />
      </div>
    </div>

  </div>
)


export default Billing
