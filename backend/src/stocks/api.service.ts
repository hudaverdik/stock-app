import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ApiService {
  constructor(private prisma: PrismaService) {}

  async fetchAndStoreStocks() {
    try {
      const apiKey = process.env.FINNHUB_API_KEY;
      const response = await axios.get(
        `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${apiKey}`,
      );

      const stocks = response.data;

      // Filter and store stocks in the database
      for (const stock of stocks) {
        await this.prisma.stock.upsert({
          where: { symbol: stock.symbol },
          update: { name: stock.description },
          create: {
            symbol: stock.symbol,
            name: stock.description,
            market: 'US',
          },
        });
      }

      return stocks;
    } catch (error) {
      console.error('Failed to fetch stock data:', error);
      throw new HttpException(
        'Failed to fetch stock data',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}
