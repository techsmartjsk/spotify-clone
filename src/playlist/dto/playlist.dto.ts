import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsOptional } from 'class-validator'

export class PlaylistDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  description?: string | null
}
