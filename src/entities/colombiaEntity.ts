import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class colombiaEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 2 })
  alpha_two_code: string;

  @Column()
  web_pages: string[];

  @Column()
  name: string;

  @Column()
  country: string;

  @Column()
  domains: string[];

  @Column({ default: null, length: 2 })
  stateProvince: string;
}
