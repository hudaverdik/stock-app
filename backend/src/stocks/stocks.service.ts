import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class StocksService {
  constructor(private prisma: PrismaService) {}

  async getAllStocks(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;
    return this.prisma.stock.findMany({
      skip: offset,
      take: limit,
    });
  }

  async createStock(data: Prisma.StockCreateInput) {
    return this.prisma.stock.create({ data });
  }

  async filterStocksByName(
    nameFilter: string,
    page: number = 1,
    limit: number = 10,
  ) {
    const offset = (page - 1) * limit;
    return this.prisma.stock.findMany({
      where: {
        name: {
          contains: nameFilter,
          mode: 'insensitive', // case-insensitive search
        },
      },
      skip: offset,
      take: limit,
    });
  }
}
