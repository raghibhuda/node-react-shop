/**
 *
 * Product
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import useInjectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import makeSelectProduct from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import { getProductsAction } from './actions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export class Product extends React.Component {
  constructor() {
    super();

  }
  componentDidMount = () => {
    console.log(this.props.products);
  }
  renderProducts = () => {
    return this.props.product.map((data, key) => {
      return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={key}>
          <div className="product">
            <Link to="/" className="product-link">
              <div className="product__image">
                <img src={data.image_url} alt="No preview available" class="img-responsive" />
              </div>
              <div className="product__description">
                <h4>{data.name}</h4>
              </div>
            </Link>
            <div className="product__price-cart">
              <div>
                <button className="button">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Product</title>
          <meta name="description" content="Description of Product" />
        </Helmet>

        <div className="products">
          <div className="container">
            {this.renderProducts()}
          </div>
        </div>
      </div>
    );
  }
}

// Product.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  product: makeSelectProduct(),
});

function mapDispatchToProps(dispatch) {
  return {
    showAllProducts: (data) => dispatch(getProductsAction(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = useInjectReducer({ key: 'product', reducer });
const withSaga = useInjectSaga({ key: 'product', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  memo

)(Product);
