/* eslint-disable @typescript-eslint/no-floating-promises */
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

import { join } from "path";

import { AppModule } from "./app.module";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>("PORT");

  app.setGlobalPrefix("api");
  app.useGlobalPipes(new ValidationPipe());

  app.setBaseViewsDir(join(__dirname, "../views"));
  app.setViewEngine("pug");

  await app.listen(port);
}

bootstrap();
