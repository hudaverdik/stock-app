import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { PrismaService } from '../prisma/prisma.service';
import { ApiService } from './api.service';

@Module({
  providers: [StocksService, ApiService, PrismaService],
  controllers: [StocksController],
})
export class StocksModule {}
