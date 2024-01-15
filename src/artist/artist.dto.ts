import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty, IsString } from 'class-validator'
import { Song } from 'src/song/song.dto'

export class Artist {
  @IsInt()
  @ApiProperty()
  id: number

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string

  @ApiProperty({ type: Song, isArray: true })
  songs: Song[]
}
