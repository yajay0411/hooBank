import React from 'react';
import { clients } from "../constants/index";
import styles from '../style';


const Clients = () => (
    <div className={`${styles.flexCenter} flex-col sm:flex-row w-full`}>
        {
            clients.map((client, index) => (
                <div key={client.id} className={`w-[250px] m-5 flex items-center`}>
                    <img src={client.logo} className={`w-[100%] h-[100%]`}/>
                </div>
            ))
        }
    </div>
)


export default Clients
