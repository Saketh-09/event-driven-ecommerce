import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OrdersController {
  private orders = []; // Mock data or connect to a database

  @MessagePattern({ cmd: 'create_order' })
  createOrder(orderData) {
    const newOrder = { id: Date.now().toString(), ...orderData };
    this.orders.push(newOrder);
    return newOrder;
  }

  @MessagePattern({ cmd: 'get_order_by_id' })
  getOrderById(id: string) {
    return this.orders.find(order => order.id === id);
  }
}
