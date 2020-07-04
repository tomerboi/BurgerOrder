import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import SideDrawer from '../SideDrawer/SideDrawer'
import SideMenuButton from '../../SideMenuButton/SideMenuButton'

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <SideMenuButton clicked={props.clickMenu}>Menu</SideMenuButton>
            <div className={classes.Logo}>
                <Logo></Logo>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems></NavigationItems>
            </nav>
        </header>
    )
}

export default toolbar  