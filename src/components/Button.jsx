import React from 'react';
import styles from "../style.js";

const Button = ({ Name, classname,icon, iconStyle }) => {
  return (
    <button
      type="button"
      className={classname}
    >
      <div className={`${styles.flexCenter}`}>
        <div>
          <img src={icon} className={iconStyle} />
        </div>
        <div>
          <h1>{Name}</h1>
        </div>
      </div>
    </button>
  )
}

export default Button
