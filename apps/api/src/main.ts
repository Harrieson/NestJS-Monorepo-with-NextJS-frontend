import { add } from '@foundation/sample-lib';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('add', add(3, 35));
  await app.listen(4005);
}
bootstrap();
