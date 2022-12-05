import React from 'react';
import styles from '../style';
import { footerLinks, socialMedia } from '../constants';
import { logo } from '../assets';

const Footer = () => {
    return (
        <div className='bg-black p-10 ' >
            <div className={`${styles.flexCenter} flex-col md:flex-row md:justify-center items-center`}>
                <div className={`${styles.flexStart} flex-col sm:mx-10 sm:my-5 my-3 mx-1 `}>
                    <img src={logo} className="w-[266px] h-[72px] object-contain mb-5" />
                    <p className='text-[16px] text-dimWhite max-w-[300px] text-left'>A new way to make the payments easy, reliable and secure.</p>
                </div>
                <div className={`${styles.flexStart} flex-col ss:flex-row  my-3  mx-1 flex-wrap flex-1`}>
                    {
                        footerLinks.map((flink, index) => (
                            <div key={flink.title} className={`${styles.flexStart} flex-col mx-5 my-5`}>
                                <h1 className={`text-white text-[18px] mb-5`}>{flink.title}</h1>
                                <ul>
                                    {flink.links.map((link, index) => (
                                        <li key={link.name}><a href={link.link} className={`text-dimWhite text-[16px] leading-[30px] hover:text-secondary`}>{link.name}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
            <hr className='my-5 ' />
            <div className='flex justify-between items-center my-5 mx-1 flex-col sm:flex-row'>
                <p className='text-[18px] text-dimWhite my-5'>Copyright HooBank. All Rights Reserved.</p>
                <div className='flex'>
                    {socialMedia.map((media, index) => (
                        <div key={media.id} className='mx-4'>
                            <a href={media.link}><img src={media.icon} className="w-[100%] h-[100%]" /></a>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Footer
