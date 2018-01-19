import { INITIAL_STATE, remove, update } from './reducer';

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
  describe('update', () => {
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

  describe('remove', () => {
    let payload;

    describe('given no payload', () => {
      it('should return state not modified', () => {
        expect(remove(USERS)).toEqual(USERS);
      });
    });

    describe('given no state', () => {
      it('should return initial state', () => {
        expect(remove()).toEqual(INITIAL_STATE);
      });
    });

    describe('given id on payload', () => {
      beforeEach(() => {
        payload = {
          id: USER_ID,
        };
      });

      it('should remove item from state content returning initial state', () => {
        expect(remove(USERS, payload)).toEqual(INITIAL_STATE);
      });

      it('should remove only one item from state content based on id', () => {
        const prevState = {
          ids: [USER_ID, 25],
          content: {
            [USER_ID]: { name: 'Guedes' },
            25: { name: 'Rener' },
          },
        };
        expect(remove(prevState, payload)).toEqual({
          ids: [25],
          content: {
            25: { name: 'Rener' },
          },
        });
      });
    });
  });
});
