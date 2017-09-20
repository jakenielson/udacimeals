import {
  ADD_RECIPE,
  REMOVE_FROM_CALENDER
} from '../actions'

const initialCalenderState = {
  sunday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  monday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  tuesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  wednesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  thursday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  friday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  saturday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  }
}

function calender (state = initialCalenderState, action) {
  const { day, recipe, meal } = action

  switch (action.type) {
    // When the action type is ADD_RECIPE...
    case ADD_RECIPE :
      return {
        // Modify the state...
        ...state,
        [day]: {
          // Modify the day specified in the arguments...
          ...state[day],
          // Modify the meal specified in the arguments...
          // with the recipe specified in the arguments.
          [meal]: recipe.label
        }
      }
    case REMOVE_FROM_CALENDER :
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: null
        }
      }
    default :
      return state
  }
}

export default calender
