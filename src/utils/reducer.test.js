import { INITIAL_STATE, update } from './reducer';

const USER_ID = 1;
const MOCKED_USER = {
  name: 'Rener Baffa',
};
const USERS = {
  ids: [USER_ID],
  content: {
    [USER_ID]: MOCKED_USER,
  },
};

describe('reducer util', () => {
  describe('given payload data', () => {
    it('must update from empty state', () => {
      expect(update(undefined, {
        id: USER_ID,
        data: MOCKED_USER,
      })).toEqual({
        ids: [USER_ID],
        content: {
          [USER_ID]: MOCKED_USER,
        },
      });
    });

    it('should update from previous state', () => {
      const state = {
        ids: [1, 2],
        content: {
          1: { name: 'Guedes' },
          2: { name: 'Vinicius' },
        },
      };
      expect(update(state, {
        id: USER_ID,
        data: MOCKED_USER,
      })).toEqual({
        ids: [USER_ID, 2],
        content: {
          ...state.content,
          [USER_ID]: MOCKED_USER,
        },
      });
    });

    describe('on payload data type of boolean', () => {
      describe('on false', () => {
        it('should update state', () => {
          expect(update(undefined, { id: USER_ID, data: false }))
            .toEqual({ ids: [USER_ID], content: { [USER_ID]: false } });
        });
      });
      describe('on true', () => {
        it('should update state', () => {
          expect(update(undefined, { id: USER_ID, data: true }))
            .toEqual({ ids: [USER_ID], content: { [USER_ID]: true } });
        });
      });
    });
  });

  describe('given no payload', () => {
    const state = {};
    it('should keep state', () => {
      expect(update(state)).toBe(state);
    });
  });
});
