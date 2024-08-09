'use client'
import React, { useState } from 'react';
import StockList from '../components/StockList';
import StockDetail from '../components/StockDetail';
import SearchInput from '../components/SearchInput';
import { useStocks } from '../hooks/useStocks';

const Home: React.FC = () => {
  const { stocks, selectedStock, loading, loadStocks, loadStockDetails } = useStocks();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchTerm(query);
    loadStocks(query);
  };

  const handleSelect = (symbol: string) => {
    loadStockDetails(symbol);
  };

  return (
    <div>
      <h1>Stock Market Data</h1>
      <SearchInput onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      <StockList stocks={stocks} onSelect={handleSelect} />
      <StockDetail stock={selectedStock} />
    </div>
  );
};

export default Home;
