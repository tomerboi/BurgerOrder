import React, { Component } from 'react'
import Button from '../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axios from '../../axiosOrders';
import Spinner from '../../components/UI/Spinner/Spinner'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../../hoc/Auxiliary/Auxiliary'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
        show: false
    }

    OrderClickHandler = (event) => {
        event.preventDefault();
        this.setState({ show: false });
    }

    SendOrderClickHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true, show: false })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: document.getElementsByName("name").value,
                email: document.getElementsByName("email").value,
                address: {
                    street: document.getElementsByName("street").value,
                    postalCode: document.getElementsByName("postal").value
                }
            }
        }
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({ name: order.name, email: order.email, address: order.address, loading: false })
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false })
            });
    }

    render() {
        let form = null;
        if (this.state.loading) {
            form = <Spinner />;
        }
        else {
            form = (<form>
                <input type="text" name="name" placeholder="Your Name"></input>
                <input type="email" name="email" placeholder="Your Mail"></input>
                <input type="text" name="street" placeholder="Street"></input>
                <input type="text" name="postal" placeholder="Postal Code"></input>

                <Button btnType="Success" clicked={this.SendOrderClickHandler}>ORDER</Button>
            </form>)
        }
        return (
            <Aux>
                <Modal show={this.state.show} clicked={this.OrderClickHandler}>
                    j
                </Modal>
                <div className={classes.ContactData}>
                    <h4>Enter your Contact Data</h4>
                    {form}
                </div>
            </Aux>

        );
    }
}

export default ContactData