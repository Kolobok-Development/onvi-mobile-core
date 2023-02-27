import { Module } from '@nestjs/common';
import { DomainModule } from '@/domain/domain.module';
import { CarwashController } from '@/api/car-wash/carwash.controller';

@Module({
  imports: [DomainModule],
  controllers: [CarwashController],
})
export class ApiModule {}
