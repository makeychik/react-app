import React, { Component } from 'react';
import { CryptoContext } from '../context/CryptoContext';
import SearchButton from './SearchButton';
import styles from './SearchBar.module.css';
import SearchHistoryDropdown from './SearchHistoryDropdown';
import { CryptoContextState } from '../context/CryptoProvider';

interface SearchBarState {
  isFocused: boolean;
  inputValue: string;
}

class SearchBar extends Component<Record<string, never>, SearchBarState> {
  static contextType = CryptoContext;

  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      isFocused: false,
      inputValue: '',
    };
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
  };

  handleBlur = () => {
    setTimeout(() => this.setState({ isFocused: false }), 150);
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSearch = () => {
    const context = this.context as CryptoContextState;
    if (context) {
      context.setSearchQuery(this.state.inputValue);
    }
  };

  handleSelectQuery = (query: string) => {
    const context = this.context as CryptoContextState;
    if (context) {
      this.setState({ inputValue: query }, () => context.setSearchQuery(query));
    }
  };

  render() {
    const context = this.context as CryptoContextState;
    const { isFocused, inputValue } = this.state;

    return (
      <div className={styles['search-container']}>
        <div className={styles['search-input-container']}>
          <input
            className={styles['search-bar']}
            type="text"
            placeholder="Search for a coin..."
            value={inputValue}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleInputChange}
          />
          <SearchButton onClick={this.handleSearch} />
        </div>
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
