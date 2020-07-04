import React from 'react'
import classes from './SideMenuButton.module.css'

const sideMenuButton = (props) => {
    return (
        <div className={classes.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default sideMenuButton  