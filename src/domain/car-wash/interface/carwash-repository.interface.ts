import { Carwash } from '../model/carwash';

export interface ICarwashRepository {
  getAll(): Promise<Carwash[]>;
}
