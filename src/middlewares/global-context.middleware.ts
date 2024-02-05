import { Injectable, NestMiddleware } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as dayjs from "dayjs";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response, NextFunction } from "express";

@Injectable()
export class GlobalContextMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction) {
    res.locals = {
      pretty: this.configService.get<string>("NODE_ENV") === "development",
      site: this.configService.get<string>("HOST"),
      year: dayjs().format("YYYY"),
      time: dayjs(),
    };
    next();
  }
}
