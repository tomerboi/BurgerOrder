import React from 'react'
import classes from './BuildControl.module.css'

const buildControl = (props) => {
    return(
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.name}</div>
            <button onClick={props.addIngredient} className={classes.More}>+</button>
            <button onClick={props.removeIngredient} disabled={!props.status} className={classes.Less}>-</button>
        </div>
    )
}

export default buildControl;