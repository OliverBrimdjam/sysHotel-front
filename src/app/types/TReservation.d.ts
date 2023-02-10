export type TReservation = {
  id: number;
  guestId: number;
  companionId?: number;
  roomId: number;
  reservationStatusId: number;
  reserveStart: Date;
  days: number;
  checkIn?: Date;
  checkOut?: Date;
  createdAt: Date;
  updatedAt?: Date;
}
