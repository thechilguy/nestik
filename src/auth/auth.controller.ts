import { Body, Controller } from '@nestjs/common';
import { AcessDTO, LoginDTO } from './dto';
import { AuthService } from './auth.servise';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  login(@Body() data: LoginDTO): AcessDTO {
    return this.authService.login(data);
  }
}
