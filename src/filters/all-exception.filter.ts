import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Response } from "express";

import { TelegramService } from "../telegram/telegram.service";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(
    private readonly telegram: TelegramService,
    private readonly config: ConfigService,
    private readonly logger: Logger,
  ) {}

  async catch(exception: HttpException, host: ArgumentsHost): Promise<void> {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const httpStatus =
      exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    let body: unknown = exception;

    if (httpStatus === HttpStatus.INTERNAL_SERVER_ERROR) {
      const exceptionString = JSON.stringify(exception, null, 2);
      const message = `AllExceptionsFilter Status ${httpStatus} \n\n${exceptionString}\n\n${exception.stack}`;

      if (this.config.get("NODE_ENV") === "production") await this.telegram.sendMessage(message);
      else this.logger.error(message);
    } else body = exception.getResponse();

    response.status(httpStatus);
    response.send(body);
  }
}
