/**
 *
 * Category
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
import makeSelectCategory from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Category() {
  useInjectReducer({ key: 'category', reducer });
  useInjectSaga({ key: 'category', saga });

  return (
    <div>
      <Helmet>
        <title>Category</title>
        <meta name="description" content="Description of Category" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Category.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  category: makeSelectCategory(),
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
)(Category);
