'use client'
import React, { useState } from "react";
import styles from "../styles/StockList.module.css";

interface Stock {
  symbol: string;
  name: string;
}

interface StockListProps {
  stocks: Stock[];
  onSelect: (symbol: string) => void;
}

const StockList: React.FC<StockListProps> = ({ stocks, onSelect }) => {
  const [selected, setSelected] = useState<string>("");

  const handleSelect = (symbol: string) => {
    setSelected(symbol);
    onSelect(symbol);
  };

  return (
    <ul className={styles.list}>
      {stocks.map((stock) => (
        <li
          key={stock.symbol}
          className={selected === stock.symbol ? styles.selected : ""}
          onClick={() => handleSelect(stock.symbol)}
        >
          {stock.name} ({stock.symbol})
        </li>
      ))}
    </ul>
  );
};

export default StockList;
