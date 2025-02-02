import { Component } from 'react';
import styles from './SearchButton.module.css';

interface SearchButtonProps {
  onClick: () => void;
}

class SearchButton extends Component<SearchButtonProps> {
  render() {
    return (
      <button className={styles.button} onClick={this.props.onClick}>
        Search
      </button>
    );
  }
}

export default SearchButton;
