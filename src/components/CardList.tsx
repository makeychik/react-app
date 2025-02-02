import { Component } from 'react';
import Card from './Card';

interface Item {
  id: string;
  title: string;
  description: string;
}

interface CardListProps<T extends Item> {
  items: T[];
}

export default class CardList<T extends Item> extends Component<
  CardListProps<T>
> {
  render() {
    const { items } = this.props || [];

    return (
      <div>
        {items.length > 0 ? (
          items.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    );
  }
}
