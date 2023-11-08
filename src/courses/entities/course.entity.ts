import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tags } from './tags.entity';
import { IsNotEmpty } from 'class-validator';
import { randomUUID } from 'crypto';

@Entity('courses') // nome da tabela no banco de dados
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @JoinTable()
  @IsNotEmpty({ each: true })
  @ManyToMany(() => Tags, (tags) => tags.courses, {
    cascade: true,
  })
  tags: string[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @BeforeInsert() // a aplicação vai gerar o id antes de inserir no banco de dados
  generatedId() {
    if (this.id) {
      return this.id;
    }
    this.id = randomUUID();
  }
}
