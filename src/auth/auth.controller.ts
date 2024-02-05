import {
  Body,
  Controller,
  Post,
  HttpCode,
  UseGuards,
  UnauthorizedException,
  ConflictException,
} from "@nestjs/common";

import { AuthInterface } from "./auth.interface";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { RefreshTokenDto } from "./dto/refreshToken.dto";
import { LocalAuthGuard } from "./guards/local.guard";

import { UserParam } from "../user/decorators/user.decorator";
import { User } from "../user/user.entity";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  async login(@UserParam() user: User): Promise<AuthInterface> {
    return this.authService.authenticate(user);
  }

  @Post("signup")
  @HttpCode(200)
  async signup(@Body() dto: AuthDto): Promise<AuthInterface> {
    try {
      const user = await this.authService.signup(dto);
      return user;
    } catch (error) {
      throw new ConflictException("User with this email is already registered");
    }
  }

  @Post("token")
  @HttpCode(200)
  async getNewTokens(@Body() dto: RefreshTokenDto): Promise<AuthInterface> {
    try {
      const user = await this.authService.getNewTokens(dto);
      return user;
    } catch (error) {
      throw new UnauthorizedException("Invalid token or expired");
    }
  }
}
