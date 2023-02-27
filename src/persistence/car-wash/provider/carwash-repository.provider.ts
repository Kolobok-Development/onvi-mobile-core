import { Provider } from '@nestjs/common';
import { CarwashRepository } from '@/persistence/car-wash/repository/carwash.repository';

export const CarwashRepositoryProvider: Provider = {
  provide: 'CarwashRepository',
  useClass: CarwashRepository,
};
