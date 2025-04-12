import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { Product, ProductSchema } from './product/schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://saketh:beehyv123@ecommercedb.zqcja.mongodb.net/?retryWrites=true&w=majority&appName=ecommerceDB'
    ),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
