import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    JoinTable,
    Timestamp
  } from "typeorm";
  import { UserEntity } from "./UserEntity";
  import { CommentEntity } from "./CommnetEntity";
  import { CategoryEntity } from "./CategoryEntity";
  
  @Entity({ name: 'posts' })
  export class PostEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => UserEntity, user => user.posts)
    user: UserEntity;
  
    @OneToMany(() => CommentEntity, comment => comment.post)
    comments: CommentEntity[];
  
    @ManyToMany(() => CategoryEntity, category => category.posts)
    @JoinTable()
    categories: CategoryEntity[];
  
    @Column({ type: 'varchar', nullable: false })
    subject: string;
  
    @Column({ type: 'text', nullable: false })
    detail: string;
  
    @Column({ type: 'int', default: 0 })
    views: number = 0;
  
    @CreateDateColumn()
    createdAt: Timestamp;
  
    @UpdateDateColumn()
    updatedAt: Timestamp;
  
    @DeleteDateColumn()
    deletedAt: Timestamp | null;
  }
  