import {
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
} from '@nestjs/common';

export class ImagePipe extends ParseFilePipe {
  constructor(fileIsRequired = false) {
    super({
      fileIsRequired,
      validators: [
        new FileTypeValidator({
          fileType: /^image\/(png|webm)$/,
        }),
        new MaxFileSizeValidator({
          maxSize: 5 * 1024 * 1024,
        }),
      ],
    });
  }
}
