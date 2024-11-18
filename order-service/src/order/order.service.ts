import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async createOrder(orderData: Partial<Order>): Promise<Order> {
    const newOrder = this.orderRepository.create(orderData);
    return this.orderRepository.save(newOrder);
  }

  async getOrders(): Promise<Order[]> {
    return this.orderRepository.find();
  }

  async getOrderById(id: number): Promise<Order> {
    return this.orderRepository.findOne({ where: { id } });
  }

  async updateOrder(id: number, updateData: Partial<Order>): Promise<Order> {
    await this.orderRepository.update(id, updateData);
    return this.getOrderById(id);
  }

  async deleteOrder(id: number): Promise<void> {
    await this.orderRepository.delete(id);
  }
}
