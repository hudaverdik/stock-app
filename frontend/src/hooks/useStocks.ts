import { useState, useEffect, useCallback } from "react";
import { fetchStocks, fetchStockDetails, StockDetail, Stock } from "../services/stockService";

export const useStocks = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [selectedStock, setSelectedStock] = useState<StockDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const loadStocks = useCallback(async (searchTerm: string) => {
    setLoading(true);
    try {
      const result = await fetchStocks(searchTerm);
      setStocks(result);
    } catch (error) {
      console.error("Error fetching stocks:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadStockDetails = useCallback(async (symbol: string) => {
    setLoading(true);
    try {
      const details = await fetchStockDetails(symbol);
      setSelectedStock(details);
    } catch (error) {
      console.error("Error fetching stock details:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { stocks, selectedStock, loading, loadStocks, loadStockDetails };
};
