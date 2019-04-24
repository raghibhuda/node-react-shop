/**
 *
 * Cart
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCart from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Cart() {
  useInjectReducer({ key: 'cart', reducer });
  useInjectSaga({ key: 'cart', saga });

  return (
    <div>
      <Helmet>
        <title>Cart</title>
        <meta name="description" content="Description of Cart" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Cart.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cart: makeSelectCart(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Cart);
