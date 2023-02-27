class Location {
  lat: number;
  lon: number;
}

class Price {
  id: number;
  name: string;
  description: string;
  cost: number;
  costType: string;
}

class Box{
  id: string;
  number: number;
  status: string;
}

export class Carwash {
  id: string;
  name: string;
  identifier: string;
  address?: string;
  city: string;
  isActive: boolean;
  limitMaxCost?: number;
  limitMinCost?: number;
  stepCost?: number;
  type?: string;
  price?: Price;
  location?: Location;
  boxes?: Box;
}
