import React, { Component } from "react";
import { OrderDto } from "../dto/OrderDto";
import { Order } from "./Order";
import { tickers } from "../model/Tickers";
import { initialOrders } from "../model/InitialOrders";

interface State {
  orders: OrderDto[];
  isVisible: boolean;
}

export class Orders extends Component<any, State> {
  state = {
    orders: [] as OrderDto[],
    isVisible: true,
  };

  componentDidMount() {
    this.setState({
      orders: initialOrders,
    });
  }

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<State>) {
    if (this.state.orders.length === 0) {
      this.setState({
        orders: initialOrders,
      });
    }
  }

  shouldComponentUpdate(
    nextProps: Readonly<any>,
    nextState: Readonly<State>
  ): boolean {
    if (nextState.orders.length === 0) {
      return true;
    }
    const { ticker } = nextState.orders[nextState.orders.length - 1];
    return ticker !== "Fake";
  }

  render() {
    const label = this.state.isVisible ? "Hide table" : "Show table";
    const table = this.state.isVisible ? (
      <>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Ticker</th>
              <th>Amount</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map((o, index) => (
              <Order key={index} order={o} />
            ))}
          </tbody>
        </table>
        <button onClick={this.generateOrder}>Generate Order</button>
        <button onClick={this.removeLastOrder}>Remove Last Order</button>
      </>
    ) : null;

    return (
      <>
        <button onClick={this.toggleTable}>{label}</button>
        {table}
      </>
    );
  }

  generateOrder = () => {
    const ticker = tickers[Math.floor(Math.random() * tickers.length)];
    const amount = Math.floor(Math.random() * 100);
    const price = Math.floor(Math.random() * 100) + 100;
    const order: OrderDto = { executed: new Date(), ticker, amount, price };
    const orders = [...this.state.orders];
    orders.push(order);
    this.setState({ orders: orders });
  };

  removeLastOrder = () => {
    const orders = [...this.state.orders];
    orders.pop();
    this.setState({
      orders: orders,
    });
  };

  toggleTable = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
}
