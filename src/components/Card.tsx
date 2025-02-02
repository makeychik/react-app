import { Component } from "react";
import styles from "./Card.module.css";

export interface CardProps {
  title: string;
  description: string;
  image: string;
}

class Card extends Component<CardProps> {
  render() {
    const { title, description, image } = this.props;

    return (
      <div className={styles.card}>
        <img src={image} alt={title} className={styles.card__image} />
        <div className={styles.card__content}>
          <h3 className={styles.card__title}>{title}</h3>
          <p className={styles.card__description}>{description}</p>
        </div>
      </div>
    );
  }
}

export default Card;
