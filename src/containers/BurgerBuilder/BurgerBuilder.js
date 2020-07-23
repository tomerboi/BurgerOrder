import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import BuildBurgerController from '../BuildControl/BuildBurgerController';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Price from '../../components/Price/Price'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/Modal'
import axios from '../../axiosOrders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Checkout from '../Checkout/Checkout'

const Burger_Prices = {
    tomato: 1,
    onion: 0.3,
    pickels: 0.5,
    letuce: 2,
    cheese: 1.5,
    meat: 1
}

class BurgerBuilder extends Component {
    state = {
        price: 0,
        burger: null,
        didCheckout: false,
        loading: false,
        error: false
    }

    checkoutOrder = () => {
        this.setState(
            {
                didCheckout: !this.state.didCheckout
            }
        )
        //go to checkout screen
    }

    componentDidMount() {
        axios.get('/Ingredients.json')
            .then(response => {
                this.setState({ burger: response.data })
            })
            .catch((error) => { this.setState({ error: true }) })
    }

    addIngredient = (ingredient) => {
        let numOfIng = this.state.burger[ingredient];
        let ing = { ...this.state.burger };
        numOfIng++;
        ing[ingredient] = numOfIng;

        var newPrice = this.getCurrentPrice(Burger_Prices[ingredient], (a, b) => a + b);

        this.setState({
            burger: ing,
            price: newPrice
        })
    }

    removeIngredient = (ingredient) => {
        let numOfIng = this.state.burger[ingredient];
        let ing = { ...this.state.burger };
        if (numOfIng > 0) {
            numOfIng--;
            ing[ingredient] = numOfIng;
        }

        var newPrice = this.getCurrentPrice(Burger_Prices[ingredient], (a, b) => a - b);

        this.setState({
            burger: ing,
            price: newPrice
        })
    }

    BackDropClickedHandler = () => {

        this.setState({
            didCheckout: false
        })
    }

    ContinueClickedHandler = () => {
        this.setState({ loading: true })
        const order = {
            ingredients: this.state.burger,
            price: this.state.price,
            customer: {
                name: "Tomer",
                address: {
                    street: "Tom Lantos",
                    zipCode: "872532",
                    state: "Israel"
                }
            }
        }
        //   axios.post('/orders.json', order)
        //     .then(response => {
        //          console.log(response);
        //          this.setState({ loading: false, didCheckout: false })
        //      })
        //      .catch(error => {
        //          console.log(error);
        //          this.setState({ loading: false, didCheckout: false })
        //      });
        const queryParams = [];
        for (let i in this.state.burger) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.burger[i]));
        }
        const price = "&price=" + this.state.price;
        const queryString = queryParams.join('&') + price;
        this.props.history.push({ pathname: "/checkout", search: '?' + queryString });
    }

    getCurrentPrice(price, func) {
        return func(this.state.price, price);
    }

    render() {
        var diabledInfo = {
            ...this.state.burger
        }

        for (let key in diabledInfo) {
            diabledInfo[key] = (diabledInfo[key] > 0)
        }
        let modalShow = null;


        var burger = this.state.error ?
            <p>burger ingredients cannot download from server</p> :
            (<Spinner />)

        if (this.state.burger) {
            burger = (<Aux>
                <Burger ingredients={this.state.burger}></Burger>
                <BuildBurgerController
                    shouldDisabled={diabledInfo}
                    addIngredient={this.addIngredient}
                    removeIngredient={this.removeIngredient}
                    doCheckout={this.checkoutOrder}>
                </BuildBurgerController>
            </Aux>)
            modalShow = (<OrderSummary burgerIngredients={this.state.burger}
                clickedCancel={this.BackDropClickedHandler}
                clickedContinue={this.ContinueClickedHandler}
                price={this.state.price}></OrderSummary>)
        }

        if (this.state.loading) {
            modalShow = (<Spinner />)
        }
        return (
            <Aux>
                <Modal show={this.state.didCheckout} clicked={this.BackDropClickedHandler}>
                    {modalShow}
                </Modal>
                {burger}

            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);