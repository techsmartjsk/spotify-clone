import { ApiProperty } from '@nestjs/swagger'
import {
  IsInt,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
} from 'class-validator'
import { Artist } from 'src/artist/artist.dto'
import { Playlist } from 'src/playlist/playlist.dto'

export class Song {
  @IsInt()
  @ApiProperty()
  id: number

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string

  @ApiProperty({ type: Artist })
  artist: Artist

  @IsOptional()
  @IsInt()
  @ApiProperty({ required: false })
  artistId?: number

  @IsNumber()
  @ApiProperty()
  duration: number

  @ApiProperty({ type: Playlist, isArray: true })
  playlists: Playlist[]
}
