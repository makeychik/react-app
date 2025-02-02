export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
}

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';

export const fetchCoins = async (): Promise<Coin[]> => {
  try {
    const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': API_KEY,
      },
    };

    const response = await fetch(
      `${API_URL}?vs_currency=usd&order=market_cap_desc&per_page=20&page=1`,
      options
    );

    if (!response.ok) {
      const errorMessage = `Error ${response.status}: ${
        response.statusText || 'Something went wrong'
      }`;
      throw new Error(errorMessage);
    }

    const data: Coin[] = await response.json();

    return data;
  } catch (error: any) {
    console.error('Error fetching coins:', error.message || error);
    throw error;
  }
};
