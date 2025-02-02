import { Component } from "react";
import { CryptoContext, CryptoContextState } from "../context/CryptoContext";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import styles from "./Header.module.css";

class Header extends Component {
  static contextType = CryptoContext;

  handleSearch = () => {
    const context = this.context as CryptoContextState;
    console.log("Searching for:", context.searchQuery);
  };

  render() {
    return (
      <header className={styles.header}>
        <div className={styles["top-controls"]}>
          <SearchBar />
          <SearchButton onClick={this.handleSearch} />
        </div>
      </header>
    );
  }
}

export default Header;
