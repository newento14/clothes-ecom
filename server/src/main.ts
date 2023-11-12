import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 8899;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors()
  await app.listen(PORT, () => console.log(`server start on ${PORT}`));
}

bootstrap();
