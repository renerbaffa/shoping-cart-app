import { PRODUCTS_LOADING } from '../actions/productsActions';
import { FAILED, RETRIEVED } from '../constants/loadingStatus';

import communication from './communication';

const ACTION = {
  type: PRODUCTS_LOADING,
  meta: {
    isLoading: RETRIEVED,
  },
};

describe('communication reducer', () => {
  it('should set empty object as initial state', () => {
    expect(communication()).toEqual({});
  });

  it('should set correct flag according to dispatched action meta', () => {
    expect(communication({}, ACTION)).toEqual({
      areProjectsLoading: RETRIEVED,
    });
  });

  it('should retur current state when isLoading is not provided', () => {
    const PREV_STATE = { areProjectsLoading: FAILED };
    expect(
      communication(
        PREV_STATE,
        { type: PRODUCTS_LOADING, meta: {} }
      ),
    ).toEqual(PREV_STATE);
  });
});
