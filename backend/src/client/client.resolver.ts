/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { Client } from './models/client.model';
import { NotFoundException } from '@nestjs/common';
import { ClientService } from './client.service';
import { NewClientInput } from './dto/new-client-input';

@Resolver((of) => Client)
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {}

  // get Client

  @Query((returns) => Client)
  async client(
    @Args('id') id: string,
  ): Promise<Client> {
    const recipe = await this.clientService.findOne(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return recipe;
  }

  // get client list

  @Query((returns) => [Client])
  clients(): Promise<Client[]> {
    return this.clientService.findAll();
  }

  // Add new client

  @Mutation((returns) => Client)
  async addClient(
    @Args('newClientData') newClientData: NewClientInput,
  ): Promise<Client> {
    const client = await this.clientService.create(newClientData);
    return client;
  }

  // update client

  @Mutation((returns) => String)
  async updateClient(
    @Args('updateClientData') updateClientData: NewClientInput,
  ): Promise<string> {
    await this.clientService.update(updateClientData);
    return 'client data update successfuly';
  }

  // remove client

  @Mutation((returns) => Boolean)
  async removeClient(@Args({ name: 'id', type: () => String }) id: string) {
    console.log('enter in delete');
    return this.clientService.remove(id);
  }
}
