import { Component, createContext, ReactNode } from 'react';
import { Coin, fetchCoins } from '../services/api';

export interface CryptoContextState {
  coins: Coin[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  refreshCoins: () => void;
}

interface CryptoProviderProps {
  children: ReactNode; // ✅ Fix: Define children prop
}

export const CryptoContext = createContext<CryptoContextState | undefined>(
  undefined
);

export default class CryptoProvider extends Component<
  CryptoProviderProps,
  CryptoContextState
> {
  constructor(props: CryptoProviderProps) {
    super(props);

    this.state = {
      coins: [],
      loading: true,
      error: null,
      searchQuery: '',
      setSearchQuery: this.handleSearchQuery,
      refreshCoins: this.loadCoins,
    };
  }

  handleSearchQuery = (query: string) => {
    this.setState({ searchQuery: query });
  };

  loadCoins = async () => {
    this.setState({ loading: true, error: null });

    try {
      const coins = await fetchCoins();
      this.setState({ coins, loading: false });
    } catch (error) {
      this.setState({ error: 'Failed to load coins', loading: false });
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
