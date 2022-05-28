import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column()
  lastName: string;

  @Column()
  firstName: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;
}
