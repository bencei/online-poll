import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { redisClientOptions } from './redis-client.optons';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(redisClientOptions);
  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
