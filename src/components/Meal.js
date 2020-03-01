import React, { Component } from 'react'
import Menu from './Menu';
import breakfast from '../BreakfastMenu.json'
import dinner from '../DinnerMenu.json'

class Meal extends Component {
    render() {
        let meal = this.props.type==='Breakfast' ? breakfast : dinner
        return (
            <div>
                What do you want for {this.props.type}?
                <Menu menu={meal} />
            </div>
        )
    }
}

export default Meal
