export type TOrder = {
  id: number;
  reservationId: number;
  roomServiceId: number;
  roomServiceStatusId: number;
  createdAt: Date;
  updatedAt?: Date;
}
