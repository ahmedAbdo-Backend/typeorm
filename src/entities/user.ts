import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("user")
export class userEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50 })
  firstName: string;

  @Column({ type: "varchar", length: 50 })
  lastName: string;

  @Column({ type: "varchar", unique: true })
  email: string;

  @Column({ type: "enum", enum: ["admin", "user", "guest"] })
  role: string;

  @Column({ type: "boolean", default: false })
  isActive: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
