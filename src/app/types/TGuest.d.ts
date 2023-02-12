export type TGuest = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  documentType: string;
  documentCode: string;
  createdAt: Date;
  updatedAt?: Date;
}
