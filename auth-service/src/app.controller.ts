import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { AuthMessage } from '@shared/constants';
import { Login, LoginResponse } from '@shared/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern(AuthMessage.Login)
  async login(@Payload() payload: Login): Promise<LoginResponse> {
    console.log(payload);
    return {
      token: 'token',
    };
  }
}
