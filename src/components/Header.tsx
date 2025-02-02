import { Component } from 'react';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import { CryptoContext, CryptoContextState } from '../context/CryptoContext';

class Header extends Component {
  static contextType = CryptoContext;

  handleSearch = () => {
    const context = this.context as CryptoContextState;
    if (context) {
      console.log('Searching for:', context.searchQuery);
    }
  };

  render() {
    return (
      <header style={styles.header}>
        <SearchBar />
        <SearchButton onClick={this.handleSearch} />
      </header>
    );
  }
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    padding: '10px',
    background: '#282c34',
  },
};

export default Header;
