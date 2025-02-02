import React, { Component } from 'react';
import { CryptoContext, CryptoContextState } from '../context/CryptoContext';
import styles from './SearchBar.module.css';
import SearchHistoryDropdown from './SearchHistoryDropdows';

interface SearchBarState {
  isFocused: boolean;
}

class SearchBar extends Component<{}, SearchBarState> {
  static contextType = CryptoContext;

  constructor(props: {}) {
    super(props);
    this.state = {
      isFocused: false,
    };
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
  };

  handleBlur = () => {
    setTimeout(() => this.setState({ isFocused: false }), 150);
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const context = this.context as CryptoContextState;
    if (context) {
      context.setSearchQuery(event.target.value);
    }
  };

  handleSelectQuery = (query: string) => {
    const context = this.context as CryptoContextState;
    if (context) {
      context.setSearchQuery(query);
    }
  };

  render() {
    const context = this.context as CryptoContextState;
    const { isFocused } = this.state;

    return (
      <div className={styles['search-container']}>
        <input
          className={styles['search-bar']}
          type="text"
          placeholder="Search for a coin..."
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          value={context.searchQuery}
        />
        {isFocused && (
          <SearchHistoryDropdown
            history={context.searchHistory}
            onSelect={this.handleSelectQuery}
          />
        )}
      </div>
    );
  }
}

export default SearchBar;
