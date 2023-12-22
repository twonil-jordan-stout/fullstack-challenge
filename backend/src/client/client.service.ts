import { Injectable } from '@nestjs/common';
import { NewClientInput } from './dto/new-client-input';
import { Client } from './models/client.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ClientService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */
  constructor(
    @InjectModel(Client)
    private clientModel: typeof Client,
  ) {}

  async create(data: NewClientInput): Promise<Client> {
    return this.clientModel.create({
      id: data.id,
      name: data.name,
      product: data.product,
      description: data.description || '',
    });
  }

  async findOneById(id: number): Promise<Client> {
    return this.clientModel.findByPk(id);
  }

  async findAll(): Promise<Client[]> {
    return this.clientModel.findAll();
  }

  async update(data: NewClientInput) {
    return this.clientModel.update(
      {
        name: data.name,
        product: data.product,
        description: data.description || '',
      },
      {
        where: {
          id: data.id,
        },
      },
    );
  }

  async remove(id: number) {
    const isDeleted = await this.clientModel.destroy({
      where: {
        id: id,
      },
    });
    if (isDeleted === 0) {
      return false;
    }
    return true;
  }
}
