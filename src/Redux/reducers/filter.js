import actionTypes from '../constants/actionTypes';

// eslint-disable-next-line default-param-last
const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case actionTypes.CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
