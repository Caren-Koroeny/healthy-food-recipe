import actionTypes from '../constants/actionTypes';

const initialState = {
  detail: [],
};

// eslint-disable-next-line default-param-last
const categoryReducer = (state = initialState, { type, payload }) => {
  const actionHandlers = {
    [actionTypes.CATEGORY_FILTER]: () => ({ ...state, detail: payload }),
    default: () => state,
  };
  const handler = actionHandlers[type] || actionHandlers.default;
  return handler();
};

export default categoryReducer;
