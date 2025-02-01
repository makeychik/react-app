import { Component } from 'react';
import Card from './Card';

interface Item {
  id: number | string;
}
interface Coin extends Item {
  name: string;
  symbol: string;
}

interface State {
  items: Coin[]; // how to use generic type here? to make a Component reusable
}

export default class CardList extends Component<{}, State> {
  constructor(props = {}) {
    super(props);
    this.state = {
      items: [
        { id: 1, symbol: 'Item 1', name: 'Description for Item 1' },
        { id: 2, symbol: 'Item 2', name: 'Description for Item 2' },
        { id: 3, symbol: 'Item 3', name: 'Description for Item 3' },
      ],
    };
  }

  async componentDidMount(): Promise<void> {
    const url =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1';
    const options = {
      method: 'GET',
      headers: { accept: 'application/json' },
    };

    try {
      const cachedData = localStorage.getItem('coinData');
      console.log(cachedData);
      if (cachedData) {
        this.setState({ items: JSON.parse(cachedData) });
        return;
      }

      const response = await fetch(url, options);
      if (!response.ok) {
        throw Error('bad request');
      }
      const result: Coin[] = await response.json();

      localStorage.setItem('coinData', JSON.stringify(result));
      this.setState({ items: result });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        {this.state.items.map((item: Coin) => {
          // Item should be generic and reusable
          return (
            <Card
              key={item.symbol}
              title={item.symbol}
              description={item.name}
            />
          );
        })}
      </div>
    );
  }
}
