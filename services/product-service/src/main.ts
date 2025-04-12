import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000); // HTTP server on port 3000
  console.log('🚀 Product Service is listening on http://localhost:3000');
}
bootstrap();
