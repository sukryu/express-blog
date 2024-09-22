import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { PostEntity } from "./PostEntity";

@Entity({ name: 'categories' })
export class CategoryEntity {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, unique: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @ManyToMany(() => PostEntity, post => post.categories)
  posts: PostEntity[];
}
