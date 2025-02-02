import { Component } from "react";
import styles from "./SearchHistoryDropdown.module.css";

interface SearchHistoryDropdownProps {
  history: string[];
  onSelect: (query: string) => void;
}

class SearchHistoryDropdown extends Component<SearchHistoryDropdownProps> {
  render() {
    const { history, onSelect } = this.props;

    const limitedHistory = history.slice(-3);

    return (
      <ul className={styles.dropdown}>
        {limitedHistory.length > 0 ? (
          limitedHistory.map((query, index) => (
            <li
              key={index}
              className={styles["dropdown-item"]}
              onClick={() => onSelect(query)}
            >
              {query}
            </li>
          ))
        ) : (
          <li className={styles["dropdown-empty"]}>No recent searches</li>
        )}
      </ul>
    );
  }
}

export default SearchHistoryDropdown;
