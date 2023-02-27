import { Module } from '@nestjs/common';
import { CarWashRepositoryModule } from '@/persistence/car-wash/car-wash-repository.module';

@Module({
  imports: [CarWashRepositoryModule],
  exports: [CarWashRepositoryModule],
})
export class PersistenceModule {}
