import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class PaymentsController {
  @MessagePattern({ cmd: 'process_payment' })
  processPayment(paymentData) {
    // Logic to interact with Stripe API would go here
    return { status: 'Payment processed', ...paymentData };
  }

  @MessagePattern({ cmd: 'get_payment_status' })
  getPaymentStatus(id: string) {
    // Mock status retrieval, or get status from database/Stripe
    return { status: 'Completed', paymentId: id };
  }
}
