import { Module } from '@nestjs/common';
import { UserConroller } from './users.controller';
import { UserService } from './users.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        global: true,
        secret: configService.get<string>('JWT_SECRET_KEY'),
        signOptions: { expiresIn: '5m' },
      }),
    }),
  ],
  controllers: [UserConroller],
  providers: [UserService],
})
export class UserModule {}
