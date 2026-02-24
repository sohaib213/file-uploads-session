import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  Injectable,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUserDto';
import { UserService } from './users.service';
import { LoginDto } from './dto/Login.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
@Injectable()
export class UserConroller {
  constructor(private readonly userServie: UserService) {}
  // @UseGuards(AuthGuard)
  @Get()
  getAllUsers() {
    return this.userServie.getAllUsers();
  }

  @Post()
  @UseInterceptors(FileInterceptor('avatar'))
  createUser(
    @Body() body: CreateUserDto,
    @UploadedFile(
      new ParseFilePipe({
        fileIsRequired: false,
        validators: [
          new FileTypeValidator({
            skipMagicNumbersValidation: false,
            fileType: /^image\/(png|jpg|webp|jpeg)$/,
            errorMessage: 'file must be image',
          }),
          new MaxFileSizeValidator({
            maxSize: 5 * 1024 * 1024,
          }),
        ],
      }),
    )
    image?: Express.Multer.File,
  ) {
    return this.userServie.createUser(body, image);
  }

  // image/png
  // image/jpg
  // video/mp4

  @Post('login')
  login(@Body() body: LoginDto) {
    return this.userServie.login(body);
  }
}
