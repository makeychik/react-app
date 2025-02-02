import { Component } from 'react';

export interface CardProps {
  key: string;
  title: string;
  description: string;
  // image: URL;
  // current_price: number;
}

export default class Card extends Component<CardProps> {
  render() {
    return (
      <>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </>
    );
  }
}
