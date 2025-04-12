import { Controller, Get, Post, Body, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('orders')
export class OrdersController {
  constructor(@Inject('ORDER_SERVICE') private readonly orderService: ClientProxy) {}

  @Post()
  createOrder(@Body() orderData: any): Observable<any> {
    return this.orderService.send({ cmd: 'create_order' }, orderData);
  }

  @Get(':id')
  getOrderById(@Param('id') id: string): Observable<any> {
    return this.orderService.send({ cmd: 'get_order_by_id' }, id);
  }
}
