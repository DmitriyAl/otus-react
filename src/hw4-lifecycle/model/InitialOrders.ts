import { OrderDto } from "../dto/OrderDto";

export const initialOrders: OrderDto[] = [
  {
    executed: new Date(Date.parse("2012-01-26T13:51:50.417")),
    ticker: "IBM",
    amount: 5,
    price: 47,
  },
  {
    executed: new Date(Date.parse("2018-05-19T17:24:19.628")),
    ticker: "TEAM",
    amount: 7,
    price: 52,
  },
  {
    executed: new Date(Date.parse("2020-08-05T18:28:49.937")),
    ticker: "WORK",
    amount: 2,
    price: 12,
  },
  {
    executed: new Date(Date.parse("2021-11-30T09:35:29.827")),
    ticker: "SPCE",
    amount: 12,
    price: 39,
  },
];
