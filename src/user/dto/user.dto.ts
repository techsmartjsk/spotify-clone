import { ApiProperty } from '@nestjs/swagger'
import { IsString, MinLength, IsEmail } from 'class-validator'

enum UserRole {
  USER = 'USER',
  ARTIST = 'ARTIST',
}

export class UserDTO {
  @IsString()
  @ApiProperty()
  username: string

  @IsEmail()
  @ApiProperty()
  email: string

  @IsString()
  @MinLength(8)
  @ApiProperty()
  password: string

  @ApiProperty({ enum: UserRole })
  role: UserRole = UserRole.USER
}
