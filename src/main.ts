import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { normalizePort } from './helpers/settings.helper';

async function bootstrap() {
  const port = normalizePort(process.env.PORT) || 3000;

  const app = await NestFactory.create(AppModule);
  // setting up CORS
  app.enableCors();
  await app.listen(port);
}
bootstrap();
