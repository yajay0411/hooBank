import React from 'react';
import Button from "./Button";
import styles from '../style';

const CTA = () => {
  return (
    <div className={`${styles.flexCenter} sm:flex-row flex-col my-20 md:mx-20 mx-8 p-1 bg-black-gradient`}>
      <div className={`${styles.flexStart} flex-col mx-5`}>
        <h1 className='text-[48px] text-white font-poppins font-semibold my-2 leading-[60px]'>You do the business,<br className='sm:block hidden' /> we’ll handle the money.</h1>
        <p className='text-[18px] text-dimWhite max-w-[400px] my-1'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
      </div>
      <div>
        <Button
          Name={"get started"}
          classname={" bg-blue-gradient py-4 px-6 text-[18px] font-semibold font-poppins text-black capitalize rounded-[10px] my-5"}
        />
      </div>
    </div>
  )
}

export default CTA
