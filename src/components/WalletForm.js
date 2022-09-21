import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { walletValueAdd } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: 0,
    description: '',
    currencies: [],
  };

  componentDidMount() {
    this.fetchCurrencies();
  }

  handleOnKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleButton();
    }
  };

  fetchCurrencies = async () => {
    const linkbrabo = 'https://economia.awesomeapi.com.br/json/all';
    const searchProduct = await fetch(linkbrabo);
    const slaOq = await searchProduct.json();
    const arr = Object.keys(slaOq).filter(
      (key) => key !== 'USDT',
    );
    console.log(arr.length);
    console.log(arr);
    this.setState({ currencies: arr });
    const { currencies } = this.state;
    const { dispatch } = this.props;
    dispatch(walletValueAdd({ currencies }));
  };

  handleOnChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.buttonDisabled);
  };

  handleButton = () => {
    console.log('sla');
  };

  render() {
    const { value,
      description,
      currencies } = this.state;
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
              value={ value }
              onChange={ this.handleOnChange }
            />
          </div>
        </form>
        <form htmlFor="formId">
          <div>
            <select data-testid="currency-input">
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
            <select data-testid="method-input">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </div>
        </form>
        <form htmlFor="formId">
          <div>
            <select data-testid="tag-input">
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
              value={ description }
              onChange={ this.handleOnChange }
            />
          </div>
          <button
            type="button"
            onKeyPress={ this.handleOnKeyPress }
            onClick={ this.handleButton }
          >
            clique
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(WalletForm);
