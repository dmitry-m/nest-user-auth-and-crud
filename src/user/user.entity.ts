import { Entity, Column } from "typeorm";

import { BaseEntity } from "../entities/baseEntity.entity";

@Entity("users")
export class User extends BaseEntity {
  @Column({ length: 255, unique: true })
  public email: string;

  @Column("boolean", { default: false, name: "is_admin" })
  public isAdmin: boolean;

  @Column({ length: 255, select: false })
  public password: string;

  @Column("text", { array: true, nullable: true })
  public favorites: string[];
}
