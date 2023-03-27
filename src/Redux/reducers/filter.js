import actionTypes from '../constants/actionTypes';

// eslint-disable-next-line default-param-last
const filterReducer = (state = 'All', action) => {
  const actionHandlers = {
    [actionTypes.CHANGE_FILTER]: () => action.filter,
    default: () => state,
  };
  const handler = actionHandlers[action.type] || actionHandlers.default;
  return handler();
};

export default filterReducer;
