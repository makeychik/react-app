import { Component } from 'react';
import { CryptoContext, CryptoContextState } from '../context/CryptoContext';
import CardList from './CardList';
import ErrorBoundary from './ErrorBoundary';

class Main extends Component {
  static contextType = CryptoContext;

  render() {
    const context = this.context as CryptoContextState;
    if (!context) return <p>Error: Context not available</p>;

    const { coins, searchQuery } = context;

    const items = coins
      .filter((coin) =>
        coin.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map((coin) => ({
        id: coin.id,
        title: coin.name,
        description: coin.symbol,
      }));

    return (
      <>
        <h1>Cryptocurrency List</h1>
        <ErrorBoundary>
          <CardList items={items} />
        </ErrorBoundary>
      </>
    );
  }
}

export default Main;
