import React, { Component } from 'react';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';

export class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-mail'
                },
                value: ''
            },
            deliverMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }]
                },
                value: ''
            },
        },

        // name: '',
        // email: '',
        // address: {
        //     street: '',
        //     postalCode: ''
        // },
        loading: false,
        totalPrice: 0
    }

    orderHandler = (e) => {
        e.preventDefault();

        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Guy',
                adress: {
                    street: '123 fake st',
                    zipCode: '41351',
                    country: 'USA'
                },
                email: '1234@email.com'
            },
            deliverMethod: 'fast'
        }

        axios.post('/orders.json', order)
            .then(response => {
                // this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => { this.setState({ loading: false }) })
    }

    inputChangedHandler = (e, inputIdentifier) => {
        const updatedOrderForm = { ...this.state.orderForm }
        const updatedFormElement = { ...updatedOrderForm[inputIdentifier] }
        updatedFormElement.value = e.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({ orderForm: updatedOrderForm })
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (<form action="">
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(e) => this.inputChangedHandler(e, formElement.id)} />
            ))}
            <Button btnType="Success" clicked={this.orderHandler}>Place Order</Button>
        </form>);
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter contact info</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;
