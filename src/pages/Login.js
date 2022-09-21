import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../redux/actions';

class Login extends React.Component {
  state = {
    isSubmiteButtonDisabled: true,
    email: '',
    password: '',
  };

  buttonDisabled = () => {
    const { email, password } = this.state;
    const PASSWORD_MIN_LENGTH = 6;
    const validation = [password.length >= PASSWORD_MIN_LENGTH,
      this.emailValidation(email)].every(Boolean);
    this.setState({ isSubmiteButtonDisabled: !validation });
  };

  emailValidation = (email) => /\S+@\S+\.\S+/.test(email);

  handleOnChange = ({ target }) => {
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value,
    }, this.buttonDisabled);
  };

  handlerButton = () => {
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(userLogin({ email }));
    history.push('/carteira');
  };

  render() {
    const {
      isSubmiteButtonDisabled,
      email,
      password,
    } = this.state;
    return (
      <div className="page-login">
        login
        <br />
        <form htmlFor="formId">
          <div>
            <input
              placeholder="Email"
              data-testid="email-input"
              className="email-input"
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleOnChange }
            />
          </div>
        </form>
        <form htmlFor="formId">
          <div>
            <input
              placeholder="Password"
              data-testid="password-input"
              className="password-input"
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleOnChange }
            />
          </div>
        </form>
        <div>
          <button
            data-testid="login-submit-button"
            type="button"
            disabled={ isSubmiteButtonDisabled }
            onClick={ this.handlerButton }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
