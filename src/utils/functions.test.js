import { filterByText, INITIAL_STATE } from './functions';

import PROJECTS from '../mocks/Products';
import convertToIdsAndContent from '../normalizers/productsNormalize';

const NORMALIZED_PROJECTS = convertToIdsAndContent(PROJECTS);
const FILTER = 'FANT';

describe('filterByField', () => {
  let filtered;

  describe('given no data', () => {
    beforeEach(() => {
      filtered = filterByText();
    });

    it('should return INITIAL_STATE', () => {
      expect(filtered).toEqual(INITIAL_STATE);
    });
  });

  describe('providing data', () => {
    describe('given no filter text', () => {
      beforeEach(() => {
        filtered = filterByText(NORMALIZED_PROJECTS);
      });

      it('should return all data ', () => {
        expect(filtered).toEqual(NORMALIZED_PROJECTS);
      });
    });

    describe('providing filter text', () => {
      beforeEach(() => {
        filtered = filterByText(NORMALIZED_PROJECTS, FILTER);
      });

      it('should return filtered data', () => {
        expect(filtered.ids).toHaveLength(1);
      });

      it('should return filtered data not considering camel case', () => {
        expect(filtered.ids).toHaveLength(1);
      });
    });
  });
});
