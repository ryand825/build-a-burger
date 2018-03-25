import React, { Component } from 'react';

import Wrap from '../../../hoc/Wrap';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // componentWillUpdate(){
    //     console.log('order summary will update');
    // }
    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
                </li>
            });
        return (
            <Wrap>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong> </p>
                <p>Continue to checkout?</p>
                <Button
                    clicked={this.props.cancelPurchase}
                    btnType="Danger">Cancel</Button>
                <Button
                    clicked={this.props.continutePurchase}
                    btnType="Success">Continue</Button>
            </Wrap >
        )
    }
}

export default OrderSummary
