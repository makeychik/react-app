import { Component } from 'react';
import { CryptoContext } from '../context/CryptoContext';
import SearchBar from './SearchBar';
import styles from './Header.module.css';
import { CryptoContextState } from '../context/CryptoProvider';

class Header extends Component {
  static contextType = CryptoContext;

  handleSearch = () => {
    const context = this.context as CryptoContextState;
    console.log('Searching for:', context.searchQuery);
  };

  render() {
    return (
      <header className={styles.header}>
        <div className={styles['top-controls']}>
          <SearchBar />
        </div>
      </header>
    );
  }
}

export default Header;
