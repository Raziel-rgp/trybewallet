import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

export default class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <WalletForm />
      </div>
    );
  }
}
