import { Inject, Injectable } from '@nestjs/common';
import { ICarwashRepository } from '@/domain/car-wash/interface/carwash-repository.interface';

const CarwashRepository = () => Inject('CarwashRepository');

@Injectable()
export class CarwashUsecase {
  constructor(
    @CarwashRepository() private readonly carwashRepository: ICarwashRepository,
  ) {}

  public async getAll(): Promise<any> {
    return await this.carwashRepository.getAll();
  }
}
