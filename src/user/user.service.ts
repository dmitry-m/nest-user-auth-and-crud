import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { compare, genSalt, hash } from "bcryptjs";
import { Repository, ILike } from "typeorm";

import { UpdatePassword } from "./dto/password.dto";
import { UpdateDto } from "./dto/update.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  public async getAll(searchTerm: string): Promise<User[]> {
    let users = this.userRepository.createQueryBuilder().orderBy({ created_at: "DESC" });

    if (searchTerm) {
      users = users.where({ email: ILike(`%${searchTerm}%`) });
    }

    return users.getMany();
  }

  public async getById(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async updateProfile(id: number, { isAdmin }: UpdateDto): Promise<User> {
    const user = await this.getById(id);
    user.isAdmin = isAdmin;

    return this.userRepository.save(user);
  }

  async updatePassword(id: number, { password, newPassword }: UpdatePassword): Promise<User> {
    const check: Pick<User, "password"> = await this.userRepository
      .createQueryBuilder()
      .select(["password"])
      .where({ id })
      .getRawOne();
    const passwordValid = await compare(password, check.password);

    if (!passwordValid || password === newPassword) {
      return null;
    }

    const user = await this.getById(id);
    user.password = await hash(newPassword, await genSalt(10));

    return this.userRepository.save(user);
  }

  async getCount(): Promise<number> {
    return this.userRepository.count();
  }

  async delete(id: number): Promise<number> {
    const deleted = await this.userRepository.delete(id);

    return deleted.affected;
  }
}
