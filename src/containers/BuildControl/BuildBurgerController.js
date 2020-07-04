import React ,{Fragment} from 'react'
import BuildControl from './BuildControl'
import OrderButton from './OrderButton'

const Burger_Controls = [
    "tomato",
    "onion",
    "pickels",
    "letuce",
    "cheese",
    "meat" 
]

const buildBurgerController = (props) => {
    return (
            <div>
                {Burger_Controls.map((control, index) => {
                    let stat = props.shouldDisabled[control];
                    console.log("building build controls")
                    return <BuildControl
                        key={control}
                        name={control}
                        addIngredient={() => props.addIngredient(control)}
                        removeIngredient={() => props.removeIngredient(control)}
                        status= {stat}
                         />
                })}
                <OrderButton doCheckout={props.doCheckout}></OrderButton>
            </div>
    )

}

export default React.memo(buildBurgerController)