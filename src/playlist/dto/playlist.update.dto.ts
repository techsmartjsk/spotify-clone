import { PartialType, ApiProperty } from '@nestjs/swagger'
import { PlaylistDTO } from './playlist.dto'
import { IsString, IsOptional } from 'class-validator'

export class UpdatePlaylistDTO extends PartialType(PlaylistDTO) {
  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  title?: string
}
