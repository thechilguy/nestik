import {
  Controller,
  Get,
  Body,
  Post,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ResetPasswordDTO, SetPasswordDTO, ViewProfileDTO } from './dto';
import { randomUUID } from 'node:crypto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  getProfile(): ViewProfileDTO {
    return this.profileService.getSelf(randomUUID());
  }
  @Post('reset')
  @HttpCode(HttpStatus.NO_CONTENT)
  reset(@Body() data: ResetPasswordDTO): void {}

  @Post('password')
  @HttpCode(HttpStatus.NO_CONTENT)
  setPassword(@Body() data: SetPasswordDTO): void {}
}
