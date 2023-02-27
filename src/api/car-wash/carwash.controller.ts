import { Controller, Get, HttpException, HttpStatus } from "@nestjs/common";
import { CarwashUsecase } from '@/application/use-case/car-wash/carwash.usecase';

@Controller('carwash')
export class CarwashController {
  constructor(private readonly carWashUseCase: CarwashUsecase) {}

  @Get()
  public async getAll(): Promise<any> {
    try {
      return await this.carWashUseCase.getAll();
    } catch (e) {
      if (e instanceof Error){
        console.log(e);
        throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
}
