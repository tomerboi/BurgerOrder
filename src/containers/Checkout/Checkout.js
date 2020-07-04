import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {Route} from 'react-router-dom'
import ContactData from '../ContactData/ContactData'

class Checkout extends Component {
    state = {
        ingredients: {},
        price:null
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        console.log(query);
        var ingr = {};
        var price = null;
        for(let entry of query.entries()){
            if(entry[0] === 'price'){
                price = entry[1];
            }
            else{
                ingr[entry[0]] = entry[1];
            }
        }
        this.setState({ingredients : ingr, price : price});
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {

        return (
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients}
                onCheckoutCancel={this.checkoutCancelHandler}
                onCheckoutContinue={this.checkoutContinueHandler}
                ></CheckoutSummary>
                <Route path={this.props.match.path + '/contact-data'} render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.price} {...props}/>}></Route>
            </div>);
    }
}

export default Checkout;