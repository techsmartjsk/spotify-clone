import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty, IsString, IsOptional } from 'class-validator'
import { Song } from 'src/song/song.dto'
import { User } from 'src/user/dto/user.dto'

export class Playlist {
  @IsInt()
  @ApiProperty()
  id: number

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  description?: string | null

  @IsOptional()
  @ApiProperty({ type: User })
  user?: User

  @IsOptional()
  @IsInt()
  @ApiProperty({ required: false })
  userId?: number

  @IsNotEmpty()
  @ApiProperty({ type: Song, isArray: true })
  songs: Song[]
}
