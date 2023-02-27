import { Module } from '@nestjs/common';
import { CarWashModule } from './domain/car-wash/car-wash.module';
import { DomainModule } from './domain/domain.module';
import { PersistenceModule } from './persistence/persistence.module';
import { CarWashRepositoryModule } from './persistence/car-wash/car-wash-repository.module';
import { ApiModule } from './api/api.module';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    CarWashModule,
    DomainModule,
    PersistenceModule,
    CarWashRepositoryModule,
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
