import React from 'react';
import { stats } from "../constants/index.js";
import styles from "../style.js"

const Stats = () => (
    <section className={`w-full ${styles.flexCenter} md:flex-row flex-col flex-wrap my-20`}>
        {
            stats.map((stat, index) => (
                <div key={stat.id} className={`${styles.flexCenter} flex-col lg:flex-row  flex-1 flex-wrap  my-5 mx-5`}>
                    <h4 className='font-poppins text-white xs:text-[40px] text-[30px] font-semibold text-left '>{stat.value}</h4>
                    <p className='font-poppins text-gradient uppercase text-[20px] font-normal lg:ml-5 ml-0 '>{stat.title}</p>
                </div>

            )
            )
        }

    </section>
)


export default Stats
