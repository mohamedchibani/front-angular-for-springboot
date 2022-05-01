// models/address.ts
export interface Address {
  addressId?: string;
  street: string;
  city: string;
  country: string;
  type: string;
  postal: string;
}
