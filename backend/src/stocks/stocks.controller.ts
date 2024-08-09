import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { StocksService } from './stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Get()
  async getAllStocks(
    @Query('page') page: string,
    @Query('limit') limit: string,
  ) {
    const pageNumber = parseInt(page, 10) || 1;
    const limitNumber = parseInt(limit, 10) || 10;
    return this.stocksService.getAllStocks(pageNumber, limitNumber);
  }

  @Post()
  async createStock(
    @Body() data: { symbol: string; name: string; market: string },
  ) {
    return this.stocksService.createStock(data);
  }

  @Get('filter')
  async filterStocks(
    @Query('name') name: string,
    @Query('page') page: string,
    @Query('limit') limit: string,
  ) {
    const pageNumber = parseInt(page, 10) || 1;
    const limitNumber = parseInt(limit, 10) || 10;
    return this.stocksService.filterStocksByName(name, pageNumber, limitNumber);
  }
}
