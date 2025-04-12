import { Controller, Post, Get, Body, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('payments')
export class PaymentsController {
  constructor(@Inject('PAYMENT_SERVICE') private readonly paymentService: ClientProxy) {}

  @Post()
  processPayment(@Body() paymentData: any): Observable<any> {
    return this.paymentService.send({ cmd: 'process_payment' }, paymentData);
  }

  @Get('status/:id')
  getPaymentStatus(@Param('id') id: string): Observable<any> {
    return this.paymentService.send({ cmd: 'get_payment_status' }, id);
  }
}
