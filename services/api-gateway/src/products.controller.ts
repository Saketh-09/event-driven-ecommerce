import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject('PRODUCT_SERVICE') private readonly productService: ClientProxy
  ) {}

  // Route for fetching all products
  @Get()
  getAllProducts(): Observable<any> {
    // Send a message to the Product Microservice to get all products
    return this.productService.send({ cmd: 'get_all_products' }, {});
  }

  // Route for fetching a single product by ID
  @Get(':id')
  getProductById(@Param('id') id: string): Observable<any> {
    // Send a message to the Product Microservice to get a specific product
    return this.productService.send({ cmd: 'get_product_by_id' }, id);
  }
}