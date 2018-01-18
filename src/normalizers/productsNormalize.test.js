import PRODUCTS from '../mocks/Products';

import convertToIdsAndContent from './productsNormalize';

describe('productsNormalizer', () => {
  let normalizedData;

  describe('given no data as parameter', () => {
    beforeEach(() => {
      normalizedData = convertToIdsAndContent();
    });

    it('should return empty array as ids', () => {
      expect(normalizedData.ids).toEqual([]);
    });

    it('should return empty object as content', () => {
      expect(normalizedData.content).toEqual({});
    });
  });

  describe('given products array as parameter', () => {
    beforeEach(() => {
      normalizedData = convertToIdsAndContent(PRODUCTS);
    });

    it('should add all ids in ids property', () => {
      PRODUCTS.forEach(product =>
        expect(normalizedData.ids.includes(product.productID)).toBeTruthy(),
      );
    });

    it('should add all ids in ids property', () => {
      PRODUCTS.forEach(product =>
        expect(normalizedData.content[product.productID]).toEqual(product),
      );
    });
  });
});