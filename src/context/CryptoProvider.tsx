import { Component, ReactNode } from 'react';
import { Coin, fetchCoins } from '../services/api';
import { CryptoContext } from './CryptoContext';

export interface CryptoContextState {
  coins: Coin[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  searchHistory: string[];
  setSearchQuery: (query: string) => void;
  refreshCoins: () => void;
}

interface CryptoProviderProps {
  children: ReactNode;
}

class CryptoProvider extends Component<
  CryptoProviderProps,
  CryptoContextState
> {
  constructor(props: CryptoProviderProps) {
    super(props);

    const storedHistory = JSON.parse(
      localStorage.getItem('searchHistory') || '[]'
    );

    this.state = {
      coins: [],
      loading: true,
      error: null,
      searchQuery: '',
      searchHistory: storedHistory,
      setSearchQuery: this.handleSearchQuery,
      refreshCoins: this.loadCoins,
    };
  }

  handleSearchQuery = (query: string) => {
    this.setState((prevState) => {
      const updatedHistory = [...prevState.searchHistory];

      if (query.trim() !== '' && !updatedHistory.includes(query)) {
        updatedHistory.push(query);

        if (updatedHistory.length > 10) {
          updatedHistory.shift();
        }

        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
      }

      return { searchQuery: query, searchHistory: updatedHistory };
    });
  };

  loadCoins = async () => {
    this.setState({ loading: true, error: null });

    try {
      const coins = await fetchCoins();
      this.setState({ coins, loading: false });
    } catch (error: any) {
      this.setState({
        error: error.message || 'Failed to load data. Please try again later.',
        loading: false,
      });
    }
  };

  componentDidMount() {
    this.loadCoins();
  }

  render() {
    return (
      <CryptoContext.Provider value={this.state}>
        {this.props.children}
      </CryptoContext.Provider>
    );
  }
}

export default CryptoProvider;
