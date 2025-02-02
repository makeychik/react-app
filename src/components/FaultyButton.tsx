import { Component } from 'react';

class FaultyButton extends Component {
  state = { hasError: false };

  handleClick = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      throw new Error('Test error triggered by FaultyButton');
    }

    return (
      <button
        onClick={this.handleClick}
        style={{
          padding: '10px 16px',
          background: '#ff4d4f',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Trigger Error
      </button>
    );
  }
}

export default FaultyButton;
