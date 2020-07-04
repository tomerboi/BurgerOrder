import React, { Component } from 'react'
import Aux from '../Auxiliary/Auxiliary'
import Classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/ToolBar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer : false
    }

    SideDrawerCloseHandler = () => {
        this.setState({showSideDrawer : false})
    }

    SideDrawerButtonHandler = () => {
        this.setState((prevState) => {
            return{showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar clickMenu={this.SideDrawerButtonHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerCloseHandler}/>
                <div>Toolbar, DideDrawer, BackDrop</div>
                <main className={Classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};

export default Layout;