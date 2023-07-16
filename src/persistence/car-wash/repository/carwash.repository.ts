import { ICarwashRepository } from '@/domain/car-wash/interface/carwash-repository.interface';
import { Injectable } from '@nestjs/common';
import { Carwash } from '@/domain/car-wash/model/carwash';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Headers } from '@/persistence/car-wash/dto/core/headers.dto';
import { ICarwashEntity } from '@/persistence/car-wash/entity/carwash.entity';
import { AxiosResponse } from 'axios/index';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { map, catchError } from 'rxjs';

@Injectable()
export class CarwashRepository implements ICarwashRepository {
  private apiKey: string;
  private baseUrl: string;
  private sourceCode: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.apiKey = configService.get<string>('DS_CLOUD_API_KEY');
    this.baseUrl = configService.get<string>('DS_CLOUD_URL');
    this.sourceCode = configService.get<string>('SOURCE_CODE');
  }

  /*
    TODO:
    1) Add axios error handling
    2) Format axios response to DTO
   */

  async getAll(): Promise<Carwash[]> {
    const headersReq: any = this.setHeaders(this.apiKey);
    try {
      const request: AxiosResponse = await firstValueFrom(
        this.httpService.get(
          `${this.baseUrl}/external/collection/group/list?code=${this.sourceCode}`,
          { headers: headersReq },
        ),
      );

      return request.data;
    } catch (e) {
      console.log(`Error ds-cloud`);
      console.log(e);
    }
  }

  private setHeaders(apiKey: string): Headers {
    return {
      akey: apiKey,
    };
  }
}
