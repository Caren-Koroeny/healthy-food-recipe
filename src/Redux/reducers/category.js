import actionTypes from '../constants/actionTypes';

const initialState = {
  detail: [],
};

// eslint-disable-next-line default-param-last
const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CATEGORY_FILTER:
      return { ...state, detail: payload };
    default:
      return state;
  }
};

export default categoryReducer;
