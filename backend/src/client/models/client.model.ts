import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@ObjectType({ description: 'client' })
@Table({ tableName: 'clients', initialAutoIncrement: '10000' })
export class Client extends Model {
  @Field()
  @PrimaryKey
  @Column
  id: number;

  @Field()
  @Column
  name: string;

  @Field({ nullable: true })
  @Column
  description?: string;

  @Field()
  @Column
  product: string;
}
