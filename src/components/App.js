import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {
  render() {
    console.log('Props', this.props);
    return (
      <div>
        Hello World
      </div>
    );
  }
}

function mapStateToProps ({ calendar, food }) {
  // Create an array of days
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  return {
    // Sets calendar to an array of objects with day and meals
    calendar: dayOrder.map((day) => ({
      day,
      // Get the keys of this day (breakfast, lunch, dinner)
      // Use reduce to set meals to an object containing breakfast, lunch, and dinner
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? food[calendar[day][meal]]
          : null;

        return meals;
      }, {})
    }))
  }
}

function mapDispatchToProps (dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
