import {
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
} from '@nestjs/common';

export class VideoPipe extends ParseFilePipe {
  constructor(fileIsRequired = false) {
    super({
      fileIsRequired,
      validators: [
        new FileTypeValidator({
          fileType: /^video\/(mp4|webm)$/,
        }),
        new MaxFileSizeValidator({
          maxSize: 2 * 1024 * 1024 * 1024,
        }),
      ],
    });
  }
}
