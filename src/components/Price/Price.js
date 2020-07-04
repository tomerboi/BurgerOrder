import React from 'react'

const price = (props) => {
    return(
        <p>Price: {Number(props.price).toFixed(2)}</p> 
    )  
}

export default price  