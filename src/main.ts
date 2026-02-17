import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { globalInterceptor } from './common/interceptors/globalInterceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalInterceptors(new globalInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
