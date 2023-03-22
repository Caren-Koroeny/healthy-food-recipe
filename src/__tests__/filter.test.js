import reducer from '../Redux/reducers/filter';
import actionTypes from '../Redux/constants/actionTypes';

const filter = 'meat';

describe('Filter Reducer', () => {
  it('Should return default state', () => {
    const newState = reducer('All', {});
    expect(newState).toEqual('All');
  });

  it('Should not return default state', () => {
    const newState = reducer('Beef', {});
    expect(newState).not.toEqual('All');
  });

  it('The default state should not be undefined', () => {
    const newState = reducer('All', {});
    expect(newState).not.toEqual(undefined);
  });

  it('Should return new state if action type is received', () => {
    const newState = reducer('All', {
      type: actionTypes.CHANGE_FILTER,
      payload: filter,
    });

    expect(newState).not.toEqual(null);
  });

  it('Should return undefined if no action was selected', () => {
    const newState = reducer('', {
      type: actionTypes.CHANGE_FILTER,
      payload: filter,
    });

    expect(newState).toEqual(undefined);
  });

  it('should match snapshot', () => {
    const newState = reducer('All', {});
    expect(newState).toMatchSnapshot();
  });
});
