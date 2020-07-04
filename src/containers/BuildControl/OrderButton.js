import React from 'react'
import classes from './OrderButton.module.css'

const orderButton = (props) => {
    return(
        <div>
            <button className={classes.OrderButton} onClick={props.doCheckout}>Checkout</button>
        </div>
    )
}

export default orderButton;