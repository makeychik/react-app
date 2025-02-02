import { Component } from 'react';
import Card from './Card';
import styles from './CardList.module.css';

interface Item {
  id: string;
  title: string;
  description: string;
  image: string;
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
      <div className={styles['card-list']}>
        {items.length > 0 ? (
          items.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image || ''}
            />
          ))
        ) : (
          <p className={styles['no-results']}>No results found.</p>
        )}
      </div>
    );
  }
}
