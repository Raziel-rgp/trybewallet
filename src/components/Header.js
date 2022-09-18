import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email,
      expenses,
      currency } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          {email}
        </div>
        <div data-testid="total-field">
          { expenses }
        </div>
        <div data-testid="header-currency-field">
          { currency }
        </div>
      </header>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currency: state.wallet.currency,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
