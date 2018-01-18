import { PRODUCTS_LOADING } from '../actions/productsActions';
import { RETRIEVING, RETRIEVED } from '../constants/loadingStatus';

import communication from './communication';

const ACTION = {
  type: PRODUCTS_LOADING,
  meta: {
    isLoading: RETRIEVED,
  },
};

describe('communication', () => {
  it('should set empty object as initial state', () => {
    expect(communication()).toEqual({});
  });

  it('should set correct flag according to dispatched action meta', () => {
    console.log('result', communication({}, ACTION));
    expect(communication({}, ACTION)).toEqual({
      areProjectsLoading: RETRIEVED,
    });
  });
});
