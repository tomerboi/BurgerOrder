import React, { Fragment } from 'react'
import Ingredient from './Ingredient'
import classes from './Burger.module.css'
import cheese from '../../assets/images/cheese.jpeg'
import pickels from '../../assets/images/pickels.jpg'
import lettuce from '../../assets/images/lettuce.jpg'
import tomato from '../../assets/images/tomato.jpg'
import onion from '../../assets/images/onion.jpg'
import meat from '../../assets/images/meat.jpg'
import TopBread from '../../assets/images/top-bread.jpg'
import BottomBread from '../../assets/images/bottom-bread.jpg'

const Ingredients = [
    {name: 'onion', src: onion},
    {name: 'tomato', src: tomato},
    {name: 'pickels', src: pickels},
    {name: 'letuce',  src: lettuce},
    {name: 'cheese', src: cheese},
    {name: 'meat', src: meat},
    {name: 'top-bread', src: TopBread},
    {name: 'bottom-bread', src: BottomBread}
]
const burger = (props) => {
    var burgerIngredients = [];
    var ingredientNames = Object.keys(props.ingredients);
    var ingredientValues = Object.values(props.ingredients);
    var bottomBreadIndex = Ingredients.findIndex(x => x.name === "bottom-bread");
    var TopBreadIndex = Ingredients.findIndex(x => x.name === "top-bread");
    burgerIngredients.push(Ingredients[TopBreadIndex])

    ingredientNames.forEach((ingr, index) => {
        if(ingredientValues[index] > 0){
            var indexOfIng  = Ingredients.findIndex(x => x.name === ingr);
            var i = 0
            while(i != ingredientValues[index]){
                burgerIngredients.push(Ingredients[indexOfIng]);
                i++;
            }    
        }                       
    })
        
    burgerIngredients.push(Ingredients[bottomBreadIndex]);

    return(
            <div className={classes.Burger}>
                {
                    burgerIngredients.map((ingredient, index) => {
                        return <Ingredient src={ingredient.src} key={index}></Ingredient>
                    })
                }
            </div>
    )
}
export default burger;