import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientResolver } from './client.resolver';
import { Client } from './models/client.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Client])],
  controllers: [],
  providers: [ClientResolver, ClientService],
})
export class ClientModule {}
