import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    JoinTable,
    Timestamp
  } from "typeorm";
  import { PostEntity } from "./PostEntity";
  import { CommentEntity } from "./CommnetEntity";
  import { RoleEntity } from "./RoleEntity";
  
  @Entity({ name: 'users' })
  export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Index()
    @Column({ type: 'varchar', nullable: false, unique: true })
    email: string;
  
    @Column({ type: 'varchar', nullable: false })
    password: string;
  
    @Column({ type: 'varchar', nullable: false, unique: true })
    nickname: string;
  
    @Column({ type: 'varchar', nullable: true, unique: true })
    phone: string;
  
    @ManyToMany(() => RoleEntity, role => role.users)
    @JoinTable()
    roles: RoleEntity[];
  
    @OneToMany(() => PostEntity, post => post.user)
    posts: PostEntity[];
  
    @OneToMany(() => CommentEntity, comment => comment.user)
    comments: CommentEntity[];
  
    @CreateDateColumn()
    createdAt: Timestamp;
  
    @UpdateDateColumn()
    updatedAt: Timestamp;
  
    @DeleteDateColumn()
    deletedAt: Timestamp | null;
  
    constructor(data: Partial<UserEntity> = {}) {
      Object.assign(this, data);
    }
  }
  