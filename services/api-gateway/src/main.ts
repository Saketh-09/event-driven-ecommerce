import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Setting up microservices clients with Redis connection options
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: {
      host: 'localhost', // Redis server host
      port: 6379,        // Redis server port
    },
  });

  await app.startAllMicroservices(); // Start all microservice connections
  await app.listen(3000); // Gateway listens on port 3000
}
bootstrap();
