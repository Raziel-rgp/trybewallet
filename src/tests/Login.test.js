import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWith';
import App from '../App';
import WalletForm from '../components/WalletForm';
import TableEditor from '../components/TableEditor';

describe('Test - login page', () => {
  const emailInp = 'email-input';
  const passwordInp = 'password-input';
  test('01 - test if route is "/"', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    expect(history.location.pathname).toBe('/');
  });
  test('02 - test if on render, have any "data-testid="email-input"', () => {
    renderWithRouterAndRedux(<App />);
    expect(screen.queryByTestId(emailInp)).toBeInTheDocument();
  });
  test('03 - test if on render, have any "data-testid="password-input"', () => {
    renderWithRouterAndRedux(<App />);
    expect(screen.queryByTestId(passwordInp)).toBeInTheDocument();
  });
  test('04 - test if on render, have any "data-testid="login-submit-button"', () => {
    renderWithRouterAndRedux(<App />);
    expect(screen.queryByTestId('login-submit-button')).toBeInTheDocument();
  });
  test('05 - test if button is disable', () => {
    renderWithRouterAndRedux(<App />);
    const button = screen.getByRole('button', { name: /Entrar/i });
    expect(button).toBeDisabled();
  });
  test('06 - test if button is enable', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(emailInp);
    const inputPassword = screen.getByTestId(passwordInp);
    userEvent.type(inputEmail, 'gustavoLima@gmail.com');
    userEvent.type(inputPassword, '123456');

    const button = screen.getByRole('button', { name: /Entrar/i });
    expect(button).toBeEnabled();
  });
  test('07 - test if route is "/carteira"', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(emailInp);
    const inputPassword = screen.getByTestId(passwordInp);
    userEvent.type(inputEmail, 'gustavoLima@gmail.com');
    userEvent.type(inputPassword, '123456');
    const button = screen.getByRole('button', { name: /Entrar/i });
    expect(button).toBeEnabled();
    userEvent.click(button);
    expect(history.location.pathname).toBe('/carteira');
  });
});

describe('test of compnente "WalletForm"', () => {
  test('01 - test if the component render with an input with data-testid="value-input"', () => {
    renderWithRouterAndRedux(<WalletForm />);

    const inputValor = screen.queryByTestId('value-input');
    expect(inputValor).toBeInTheDocument();
    userEvent.type(inputValor, '10');
  });
  test('02 - test if the component render with an input with data-testid="currency-input"', () => {
    renderWithRouterAndRedux(<WalletForm />);
    const button = screen.getByRole('button', { name: /adicionar despesa/i });
    expect(button).toBeInTheDocument();
    userEvent.click(button);
  });
  test('03', () => {
    renderWithRouterAndRedux(<WalletForm />);

    const inputValue = screen.queryByTestId('description-input');
    expect(inputValue).toBeInTheDocument();
    userEvent.type(inputValue, 'SEI LÁ');
  });
  test('04', async () => {
    renderWithRouterAndRedux(<WalletForm />);

    const inputValue = screen.getByTestId('currency-input');
    expect(inputValue).toBeInTheDocument();
    await waitFor(() => expect(inputValue).toHaveValue('USD'));
  });
  test('05', () => {
    renderWithRouterAndRedux(<WalletForm />);
    const inputValue = screen.getByTestId('method-input');
    expect(inputValue).toBeInTheDocument();
    expect(inputValue).toHaveValue('Dinheiro');
    userEvent.selectOptions(inputValue, 'Cartão de crédito');
  });
  test('06', () => {
    renderWithRouterAndRedux(<WalletForm />);
    const inputValue = screen.getByTestId('tag-input');
    expect(inputValue).toBeInTheDocument();
    expect(inputValue).toHaveValue('Alimentação');
  });
  test('03', () => {
    renderWithRouterAndRedux(<TableEditor />);
    const inputValor = screen.queryByTestId('value-input');
    expect(inputValor).toBeInTheDocument();
    userEvent.type(inputValor, '10');
  });
  test('02 - test if the component render with an input with data-testid="currency-input"', () => {
    renderWithRouterAndRedux(<TableEditor />);
    const button = screen.getByRole('button', { name: /Editar despesa/i });
    expect(button).toBeInTheDocument();
    userEvent.click(button);
  });
  test('03', () => {
    renderWithRouterAndRedux(<TableEditor />);

    const inputValue = screen.queryByTestId('description-input');
    expect(inputValue).toBeInTheDocument();
    userEvent.type(inputValue, 'SEI LÁ');
  });
  test('04', async () => {
    renderWithRouterAndRedux(<TableEditor />);

    const inputValue = screen.getByTestId('currency-input');
    expect(inputValue).toBeInTheDocument();
    await waitFor(() => expect(inputValue).toHaveValue('USD'));
  });
  test('05', () => {
    renderWithRouterAndRedux(<TableEditor />);
    const inputValue = screen.getByTestId('method-input');
    expect(inputValue).toBeInTheDocument();
    expect(inputValue).toHaveValue('Dinheiro');
    userEvent.selectOptions(inputValue, 'Cartão de crédito');
  });
  test('06', () => {
    renderWithRouterAndRedux(<TableEditor />);
    const inputValue = screen.getByTestId('tag-input');
    expect(inputValue).toBeInTheDocument();
    expect(inputValue).toHaveValue('Alimentação');
  });
});
