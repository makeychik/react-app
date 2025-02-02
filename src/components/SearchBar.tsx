import React, { Component } from 'react';
import { CryptoContext, CryptoContextState } from '../context/CryptoContext';

export default class SearchBar extends Component {
  static contextType = CryptoContext;

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const context = this.context as CryptoContextState;
    if (context) {
      context.setSearchQuery(event.target.value);
    }
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Search for a coin..."
        onChange={this.handleChange}
        style={styles.input}
      />
    );
  }
}

const styles = {
  input: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
};
