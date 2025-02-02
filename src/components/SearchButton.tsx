import { Component } from 'react';

interface SearchButtonProps {
  onClick: () => void;
}

class SearchButton extends Component<SearchButtonProps> {
  render() {
    return (
      <button onClick={this.props.onClick} style={styles.button}>
        Search
      </button>
    );
  }
}

const styles = {
  button: {
    padding: '8px 16px',
    fontSize: '16px',
    background: '#61dafb',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default SearchButton;
