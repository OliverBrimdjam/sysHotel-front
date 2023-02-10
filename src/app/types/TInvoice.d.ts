export type TInvoice = {
  id: number;
  guestId: number;
  paidValue?: number;
  bill: number;
  createdAt: Date;
  updatedAt?: Date;
}
