import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import AuthController from './auth.controller';
import { Service } from '@shared/constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: Service.Auth,
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [AuthController],
})
export class AppModule {}
