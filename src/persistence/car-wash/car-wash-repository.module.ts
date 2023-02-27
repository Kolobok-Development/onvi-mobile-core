import { Module } from '@nestjs/common';
import { CarwashRepositoryProvider } from '@/persistence/car-wash/provider/carwash-repository.provider';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [CarwashRepositoryProvider],
  exports: [CarwashRepositoryProvider],
})
export class CarWashRepositoryModule {}
