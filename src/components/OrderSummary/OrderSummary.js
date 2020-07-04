import React from 'react'
import Price from '../Price/Price'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Button from '../UI/Button/Button'

const orderSummary = (props) => {
    // const total_price = props.burgerIngredients.reduce((x, burgerIng) => {
    //   return x + burgerIng.price * burgerIng.total;
    //}, 0);

    const ingredientsSummary = Object.keys(props.burgerIngredients)
        .map(igKey => {
            return <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}:
                                            </span>{props.burgerIngredients[igKey]}</li>
        })

    var renderTableData = () => {
        var head =
            (<thead>
                <tr>Ingredient</tr>
                <tr>Total</tr>
                <tr>Price</tr>
            </thead>)
        return props.burgerIngredients.map((burgerIng, index) => {
            const { ingredient, total, price } = burgerIng //destructuring

            head +=
                (
                    <tr key={index}>
                        <td>{ingredient}</td>
                        <td>{total}</td>
                        <td>{price}</td>
                    </tr>)

        })
        return head;
    }

    return (
        <Aux>
            <h3>Your Order:</h3>
            <p>A delicious burger with the folowing ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <Price price={props.price}></Price>
            <Button btnType="Danger" clicked={props.clickedCancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.clickedContinue}>Continue</Button>
        </Aux>
    )
}

export default orderSummary  