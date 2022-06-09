import { Login } from '@shared/types';

export class LoginDto implements Login {
  email: string;
  password: string;
}
