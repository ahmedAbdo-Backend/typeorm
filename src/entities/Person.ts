import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn() //every table must have primary column
  _id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column({
    unique: true,
    length: 10,
    nullable: true,
  })
  cardId: string;

  @Column({
    type: "simple-json",
    nullable: true, //defualt false
  })
  additional_info: {
    age: number;
    address: string;
  };
}
