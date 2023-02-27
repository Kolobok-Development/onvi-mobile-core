import { Module } from '@nestjs/common';
import { CarWashModule } from '@/domain/car-wash/car-wash.module';

@Module({
  imports: [CarWashModule],
  exports: [CarWashModule],
})
export class DomainModule {}
