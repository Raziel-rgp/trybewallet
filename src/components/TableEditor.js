import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { walletValueAdd, saveData, deleteExpenses } from '../redux/actions';

class TableEditor extends Component {
  state = {
    currencies: [],
    expensesArr: {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    },
  };

  componentDidMount() {
    const { expenses, idToEdit } = this.props;
    const findExpense = expenses.find(({ id }) => id === idToEdit);
    this.fetchCurrencies();
    this.setState({
      ...findExpense,
    });
  }

  /*   componentDidUpdate(prevProps) {
    if (prevProps.expensesArr !== )
    const { expenses, idToEdit } = this.props;
    console.log(idToEdit, expenses);
    const expenser = expenses.find((expense) => expense.id === idToEdit);
    console.log(expenser);
    this.setState = {
      value: expenser.value,
      currency: expenser.currency,
      mathod: expenser.method,
      tag: expenser.tag,
      description: expenser.description,
    };
  } */

  fetchCurrencies = async () => {
    // ajuda do Rubens Deola - Turma 23 - Tribo A
    const { dispatch } = this.props;
    const link = 'https://economia.awesomeapi.com.br/json/all';
    const fetchCoin = await fetch(link);
    const coinJSON = await fetchCoin.json();
    const currenciesArray = Object.keys(coinJSON).filter(
      (key) => key !== 'USDT',
    );
    this.setState(
      {
        currencies: currenciesArray,
        expensesArr: {
          value: '',
          description: '',
          currency: 'USD',
          method: 'Dinheiro',
          tag: 'Alimentação',
          exchangeRates: coinJSON,
        },

      },
      () => {
        dispatch(saveData(coinJSON));
        dispatch(walletValueAdd(currenciesArray));
      },
    );
  };

  handleOnChange = ({ target }) => {
    const { name } = target;
    const { expensesArr } = this.state;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      expensesArr: {
        ...expensesArr,
        [name]: value,
      },
    });
  };

  handleButton = async () => {
    const { expenses, idToEdit, dispatch } = this.props;
    const { expensesArr } = this.state;
    const filterOfExpense = expenses.filter(({ id }) => id !== idToEdit);
    const saveExpense = {
      ...expensesArr, id: idToEdit,
    };
    const newExpense = [saveExpense, ...filterOfExpense];
    dispatch(deleteExpenses(newExpense));
    /*  dispatch(editExpenses());
    editExpense(newExpense);
    editExpense2(); */
  };

  render() {
    const { expensesArr, currencies } = this.state;
    return (
      <div className="wallet-form">
        <form htmlFor="formId">
          <div>
            <input
              placeholder="Digite o valor"
              data-testid="value-input"
              className="value-input"
              type="number"
              name="value"
              value={ expensesArr.value }
              onChange={ this.handleOnChange }
            />
          </div>
        </form>
        <form htmlFor="formId">
          <div>
            <select
              data-testid="currency-input"
              onChange={ this.handleOnChange }
              name="currency"
              value={ expensesArr.currency }
            >
              { currencies.map((curr) => (
                <option key={ curr } value={ curr }>
                  { curr }
                </option>
              )) }
            </select>
          </div>
        </form>
        <form htmlFor="formId">
          <div>
            <select
              data-testid="method-input"
              name="method"
              value={ expensesArr.method }
              onChange={ this.handleOnChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </div>
        </form>
        <form htmlFor="formId">
          <div>
            <select
              data-testid="tag-input"
              name="tag"
              value={ expensesArr.tag }
              onChange={ this.handleOnChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </div>
        </form>
        <form htmlFor="formId">
          <div>
            <input
              placeholder="Digite uma descrição"
              data-testid="description-input"
              className="description-input"
              type="select"
              name="description"
              value={ expensesArr.description }
              onChange={ this.handleOnChange }
            />
          </div>
          <button
            type="button"
            onClick={ this.handleButton }
          >
            Editar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  idToEdit: state.wallet.idToEdit,
});

TableEditor.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.instanceOf(Array).isRequired,
  idToEdit: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(TableEditor);
