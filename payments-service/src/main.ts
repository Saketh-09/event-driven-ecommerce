import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json({ verify: (req: any, res, buf) => (req.rawBody = buf) }));
  await app.listen(3000);
}
bootstrap();
