import axios from 'axios';

export interface Stock {
  symbol: string;
  name: string;
}

export interface StockDetail {
  symbol: string;
  price: number;
  // Add more fields if needed
}

const API_URL = 'http://localhost:3000';

export const fetchStocks = async (searchTerm: string): Promise<Stock[]> => {
  const response = await axios.get(`${API_URL}/stocks/filter`, { params: { name: searchTerm } });
  return response.data;
};

export const fetchStockDetails = async (symbol: string): Promise<StockDetail> => {
  const response = await axios.get(`${API_URL}/stocks/details`, { params: { symbol } });
  return response.data;
};
