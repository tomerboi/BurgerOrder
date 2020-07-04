import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliary/Auxiliary'

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.clicked}></Backdrop>
        <div className={classes.Modal} style={{
            transform: props.show ? 'translate(0)' : 'translate(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
        </div>
    </Aux>

);

export default React.memo(modal);