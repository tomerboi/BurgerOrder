import React from 'react'
import PropTypes from 'prop-types'
import classes from './Ingredient.module.css'

const ingredient = (props) => {
    return(
        <div>
            <img src={props.src}></img>
        </div>
    )
}

ingredient.propTypes = {
    src: PropTypes.string.isRequired
}

export default ingredient;