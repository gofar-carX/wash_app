export interface payrequest {
  receiverWalletId: string;
  amount: number;
  token: string;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  webhook: string;
  link: string;
  successUrl: string;
  failUrl: string;
  acceptedPaymentMethods: [string];
}
