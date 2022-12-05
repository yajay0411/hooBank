import React from 'react';
import styles from '../style';
import bill from "../assets/bill.png"
import Button from "./Button";
import { card } from "../assets"

const CardDeal = () => {
  return (
    <div>
      <div className={`${styles.flexCenter}  w-full md:flex-row flex-col  my-20 mx-auto relative`}>

        <div className={` flex-col z-[5]  mx-10 `}>
          <h1 className='font-poppins text-white text-[48px] font-semibold '>Find a better card deal<br className=' md:block hidden' /> in few easy steps.</h1>
          <p className='font-poppins text-dimWhite text-[18px] max-w-[400px] font-normal'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
          <div className='flex '>
            <Button
              Name={"get started"}
              classname={" bg-blue-gradient py-4 px-6 text-[18px] font-semibold font-poppins text-black capitalize rounded-[10px] my-5"}
            />
          </div>
        </div>



        <div className={`${styles.flexCenter} max-w-[600px] mx-10`} >
          <img src={card} alt="billing image" className='w-[100%] h-[100%] z-[5] ' />
          <div className='absolute z-[2] w-[100%] h-[50%] -left-1/2 top-0 blue__gradient rounded-full' />
          <div className='absolute z-[3] w-[50%] h-[20%] top-0  white__gradient rounded-full' />
        </div>


      </div>
    </div>
  )
}

export default CardDeal