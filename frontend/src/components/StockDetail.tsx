'use client'
import React from 'react';
import { StockDetail as StockDetailType } from '../services/stockService';

interface StockDetailProps {
  stock: StockDetailType | null;
}

const StockDetail: React.FC<StockDetailProps> = ({ stock }) => {
  if (!stock) return <p>Select a stock to see details.</p>;

  return (
    <div>
      <h2>Details for {stock.symbol}</h2>
      <p>Current Price: ${stock.price}</p>
      {/* Add more stock details here */}
    </div>
  );
};

export default StockDetail;

