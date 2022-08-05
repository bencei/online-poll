import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { redisClientOptions } from './redis-client.optons';
import { IoAdapter } from '@nestjs/platform-socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new IoAdapter());
  app.connectMicroservice<MicroserviceOptions>(redisClientOptions);
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
