import actionTypes from '../constants/actionTypes';

const initialState = {
  myMeals: [],
};

// eslint-disable-next-line default-param-last
const mealReducer = (state = initialState, { type, payload }) => {
  const actionHandlers = {
    [actionTypes.SET_MEALS]: () => ({ ...state, myMeals: payload }),
    default: () => state,
  };
  const handler = actionHandlers[type] || actionHandlers.default;
  return handler();
};

export default mealReducer;
