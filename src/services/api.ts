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
    const cachedData = localStorage.getItem('coinData');
    if (cachedData) {
      return JSON.parse(cachedData);
    }

    const response = await fetch(
      `${API_URL}?vs_currency=usd&order=market_cap_desc&per_page=10&page=1`
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data: Coin[] = await response.json();

    localStorage.setItem('coinData', JSON.stringify(data));

    return data;
  } catch (error) {
    console.error('Error fetching coins:', error);
    throw error;
  }
};
