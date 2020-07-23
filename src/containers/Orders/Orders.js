import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axiosOrders';

class Orders extends Component {
    state={
        orders:[],
        error: false
    }

    componentDidMount() {
        axios.get('/orders.json')
        .then(response => {
            this.setState({ orders: [response.data] })
        })
        .catch((error) => { this.setState({ error: true }) })
    }

    render() {
        var allOrders = this.state.orders.map((order, index) => {
            return <Order ingredients={order.ingredients} price={order.price} key={index}></Order>
        })

        return (
            <div>
                {allOrders}
            </div>
        );
    }
}

export default Orders