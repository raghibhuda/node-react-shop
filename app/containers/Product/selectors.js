import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the product state domain
 */

const selectProductDomain = state => state.product || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Product
 */

const makeSelectProduct = () =>
  createSelector(
    selectProductDomain,
    substate => substate,
  );

export default makeSelectProduct;
export { selectProductDomain };
