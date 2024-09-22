import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    Timestamp,
    UpdateDateColumn
} from "typeorm";
import { UserEntity } from "./UserEntity";
import { PostEntity } from "./PostEntity";
  
@Entity({ name: 'comments' })
export class CommentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, user => user.comments)
  user: UserEntity;
  
  @ManyToOne(() => PostEntity, post => post.comments)
  post: PostEntity;
  
  @ManyToOne(() => CommentEntity, comment => comment.childComments, { nullable: true })
  parentComment: CommentEntity;
  
  @OneToMany(() => CommentEntity, comment => comment.parentComment)
  childComments: CommentEntity[];
 
  @Column({ type: 'text', nullable: false })
  content: string;
  
  @CreateDateColumn()
  createdAt: Timestamp;
  
  @UpdateDateColumn()
  updatedAt: Timestamp;
  
  @DeleteDateColumn()
  deletedAt: Timestamp | null;
}
  