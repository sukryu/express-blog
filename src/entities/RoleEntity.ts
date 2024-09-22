import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { UserEntity } from "./UserEntity";

@Entity({ name: 'roles' })
export class RoleEntity {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  name: string;

  @ManyToMany(() => UserEntity, user => user.roles)
  users: UserEntity[];
}
