import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { StocksModule } from './stocks/stocks.module';

@Module({
  imports: [StocksModule],
  providers: [PrismaService],
})
export class AppModule {}
