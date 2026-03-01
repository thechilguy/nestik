import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users';
import { AuthService } from './auth.servise';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [UsersModule],
})
export class AuthModule {}
