import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString, MinLength, IsEmail } from 'class-validator'
import { Playlist } from 'src/playlist/playlist.dto'

enum UserRole {
  USER = 'USER',
  ARTIST = 'ARTIST',
}

export class User {
  @IsInt()
  @ApiProperty()
  id: number

  @IsString()
  @ApiProperty()
  username: string

  @IsEmail()
  @ApiProperty()
  email: string

  @IsString()
  @MinLength(8) // Example: Minimum length of the password
  @ApiProperty()
  password: string

  @ApiProperty({ enum: UserRole })
  role: UserRole = UserRole.USER

  @ApiProperty({ type: Playlist, isArray: true })
  playlists: Playlist[] = []
}
