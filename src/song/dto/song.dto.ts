import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsNumber, IsInt } from 'class-validator'

export class SongDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string

  @IsNumber()
  @ApiProperty()
  duration: number

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  artistid: number
}
