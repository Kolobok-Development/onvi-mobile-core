import { Module } from '@nestjs/common';
import { CarWashRepositoryModule } from '@/persistence/car-wash/car-wash-repository.module';
import { CarwashUsecase } from '@/application/use-case/car-wash/carwash.usecase';

@Module({
  imports: [CarWashRepositoryModule],
  providers: [CarwashUsecase],
  exports: [CarwashUsecase],
})
export class CarWashModule {}
