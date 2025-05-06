import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FundsModule } from './funds/funds.module';

@Module({
  imports: [FundsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
