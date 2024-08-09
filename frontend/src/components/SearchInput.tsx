'use client'
import React from "react";
import styles from "../styles/StockList.module.css";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search stocks by name"
      onChange={handleSearch}
      className={styles.searchInput}
    />
  );
};

export default SearchInput;
