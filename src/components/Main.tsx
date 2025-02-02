import { Component } from 'react';
import { CryptoContext } from '../context/CryptoContext';
import CardList from './CardList';
import ErrorBoundary from './ErrorBoundary';
import styles from './Main.module.css';
import { Coin } from '../services/api';
import { CryptoContextState } from '../context/CryptoProvider';

class Main extends Component {
  static contextType = CryptoContext;

  render() {
    const context = this.context as CryptoContextState;
    const { coins, searchQuery, error, loading } = context;

    const filteredItems = coins
      .filter((coin: Coin) =>
        coin.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map((coin: Coin) => ({
        id: coin.id,
        title: coin.name,
        description: `Symbol: ${coin.symbol.toUpperCase()} | Price: $${coin.current_price.toFixed(2)}`,
        image: coin.image,
      }));

    return (
      <main className={styles.main}>
        <ErrorBoundary>
          {loading ? (
            <p className={styles['loading']}>Loading...</p>
          ) : error ? (
            <div className={styles['error-message']}>
              <p>{error}</p>
              <button
                className={styles['retry-button']}
                onClick={context.refreshCoins}
              >
                Retry
              </button>
            </div>
          ) : (
            <CardList items={filteredItems} />
          )}
        </ErrorBoundary>
      </main>
    );
  }
}

export default Main;
