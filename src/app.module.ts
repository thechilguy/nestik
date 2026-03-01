import { Module } from '@nestjs/common';
import { UsersModule } from './users';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, UsersModule],
})
export class AppModule {}
