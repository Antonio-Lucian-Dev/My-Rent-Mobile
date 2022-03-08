import { Address } from './address';
import { Image } from './image';
import { VehicleInfo } from './vehicle-info';

export interface Post {
  id: string;
  description: string;
  pricePerDay: string;
  currencyType: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
  vehicleInfo: VehicleInfo;
  address: Address;
  images: Image[];
}
