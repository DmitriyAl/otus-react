import React, { Component } from "react";
import { OrderDto } from "../dto/OrderDto";

interface Props {
  order: OrderDto;
}

interface State {
  order: OrderDto;
}

export class Order extends Component<Props, State> {
  state = {
    order: this.props.order,
  };

  componentDidMount() {
    document.addEventListener("click", this.logOrder);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.logOrder);
  }

  render() {
    const order = this.state.order;

    return (
      <tr>
        <td>{order.executed.toLocaleString()}</td>
        <td>{order.ticker}</td>
        <td>{order.amount}</td>
        <td>{order.price}</td>
      </tr>
    );
  }

  logOrder = () => console.log(this.state.order);
}
