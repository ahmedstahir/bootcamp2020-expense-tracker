import React from 'react';
import Header from './components/Header'
import Balance from './components/Balance'
import Summary from './components/Summary'
import History from './components/History'
import TransactionForm from './components/TransactionForm'

import { GlobalProvider } from './context/GlobalState'

import './App.css';

function App() {
  return (
      <GlobalProvider>
          <Header />
          <div className="container">
              <Balance />
              <Summary />
              <History />
              <TransactionForm />
          </div>
      </GlobalProvider>
  );
}

export default App;