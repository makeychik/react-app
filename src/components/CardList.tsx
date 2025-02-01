import { Component } from 'react';
import Card from './Card';

interface Item {
  id: number;
  title: string;
  description: string;
}

interface State {
  items: Item[];
}

class CardList extends Component<{}, State> {
  constructor(props = {}) {
    super(props);
    this.state = {
      items: [
        { id: 1, title: 'Item 1', description: 'Description for Item 1' },
        { id: 2, title: 'Item 2', description: 'Description for Item 2' },
        { id: 3, title: 'Item 3', description: 'Description for Item 3' },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.items.map((item: Item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
