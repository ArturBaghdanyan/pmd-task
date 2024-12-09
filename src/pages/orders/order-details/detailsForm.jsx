import React from 'react'
import style from "./style.module.scss";

const DetailsForm = () => {
  return (
    <div className={style.orderDetails_container_row_content}>
								
    <form className={style.orderDetails_container_row_content_form}>
        <div className={style.orderDetails_container_row_content_form_column}>
            <div 
                className={style.orderDetails_container_row_content_form_column_item}
            >
                    <label>Your Name</label>
                    <input type="text" placeholder='Charlene Reed'/>
            </div>
            <div className={style.orderDetails_container_row_content_form_column_item}>
                    <label>Email</label>
                    <input type="email" placeholder='charlenereed@gmail.com ' />
            </div>
            <div className={style.orderDetails_container_row_content_form_column_item}>
                    <label>Date of birth</label>
                    <input type="date" placeholder='25 January 1990'/>
            </div>
            <div className={style.orderDetails_container_row_content_form_column_item}>
                    <label>Permanent Address</label>
                    <input type="text" placeholder='San Jose, California, USA'/>
            </div>
            <div className={style.orderDetails_container_row_content_form_column_item}>
                    <label>Postal Code</label>
                    <input type="text" placeholder='45962' />
            </div>
        </div>
    </form>

    <form className={style.orderDetails_container_row_content_form}>
        <div className={style.orderDetails_container_row_content_form_column}>
                <div className={style.orderDetails_container_row_content_form_column_item}>
                        <label>User Name</label>
                        <input type="text" placeholder='Charlene Reed'/>
                </div>
                <div className={style.orderDetails_container_row_content_form_column_item}>
                        <label>Password</label>
                        <input type="password" placeholder='**********' />
                </div>
                <div className={style.orderDetails_container_row_content_form_column_item}>
                        <label>Present Address</label>
                        <input type="date" placeholder='San Jose, California, USA'/>
                </div>
                <div className={style.orderDetails_container_row_content_form_column_item}>
                        <label>City</label>
                        <input type="text" placeholder='San Jose'/>
                </div>
                <div className={style.orderDetails_container_row_content_form_column_item}>
                        <label>Country</label>
                        <input type="text" placeholder='USA' />
                </div>
        </div>
    </form>
    
</div>
  )
}

export default DetailsForm