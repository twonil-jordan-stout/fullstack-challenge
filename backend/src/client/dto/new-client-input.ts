import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class NewClientInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  description?: string;

  @Field()
  product: string;
}
