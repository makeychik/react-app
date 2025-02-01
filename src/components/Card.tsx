import { Component } from 'react';

export interface CardProps {
  key: number;
  title: string;
  description: string;
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
