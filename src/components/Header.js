import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveExpenseValue } from '../redux/actions';

class Header extends Component {
  getValuesExpenses = () => {
    const { expenses, dispatch } = this.props;
    let total = 0;

    if (expenses.length > 0) {
      expenses.forEach((expense) => {
        total += Number(expense.value)
          * Number(expense.exchangeRates[expense.currency].ask);
      });
    }
    const result = Number(total).toFixed(2);
    dispatch(saveExpenseValue(result));
    return result;
  };

  render() {
    const { email } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          {email}
        </div>
        <div data-testid="total-field">
          {this.getValuesExpenses() }
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </header>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.instanceOf(Array).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Header);
