import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { compare, genSalt, hash } from "bcryptjs";
import { Repository } from "typeorm";

import { AuthInterface } from "./auth.interface";
import { AuthDto } from "./dto/auth.dto";
import { RefreshTokenDto } from "./dto/refreshToken.dto";

import { User } from "../user/user.entity";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async issueJwtTokens(id: number) {
    const data = { id };

    const refreshToken = await this.jwtService.signAsync(data, { expiresIn: "30d" });
    const accessToken = await this.jwtService.signAsync(data, { expiresIn: "5s" });

    return { refreshToken, accessToken };
  }

  public async validateUser({ email, password }: AuthDto): Promise<User> {
    const user: User = await this.userRepository
      .createQueryBuilder()
      .select([
        "id",
        "email",
        "password",
        'is_admin as "isAdmin"',
        'created_at as "createdAt"',
        "favorites",
      ])
      .where({ email })
      .getRawOne();
    if (!user) return null;

    const passwordValid = await compare(password, user.password);
    delete user.password;
    user.favorites = ["foo", "bar"];

    return passwordValid ? user : null;
  }

  public async authenticate(user: User): Promise<AuthInterface> {
    return {
      user,
      tokens: await this.issueJwtTokens(user.id),
    };
  }

  public async signup({ email, password }: AuthDto) {
    const salt = await genSalt(10);
    const entity = this.userRepository.create({
      email,
      password: await hash(password, salt),
    });

    const user = await this.userRepository.save(entity);
    delete user.password;

    return this.authenticate(user);
  }

  public async getNewTokens({ refreshToken }: RefreshTokenDto) {
    const { id }: User = await this.jwtService.verifyAsync(refreshToken);
    const user = await this.userService.getById(id);

    return this.authenticate(user);
  }
}
