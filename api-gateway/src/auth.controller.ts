import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { LoginDto } from './dtos/auth.dto';
import { AuthMessage, Service } from '@shared/constants';
import { firstValueFrom } from 'rxjs';
import { LoginResponse } from '@shared/types';

@Controller()
class AuthController {
  constructor(
    @Inject(Service.Auth) private readonly authServiceClient: ClientProxy,
  ) {}

  @Get('/')
  getHello(): string {
    return 'Hello World!';
  }

  @Post('/login')
  async login(@Body() body: LoginDto): Promise<LoginResponse> {
    const res = await firstValueFrom(
      this.authServiceClient.send<LoginResponse>(AuthMessage.Login, body),
    );

    return res;
  }
}

export default AuthController;
