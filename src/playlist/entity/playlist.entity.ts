import { ApiProperty } from '@nestjs/swagger'

export class PlaylistEntity {
  @ApiProperty()
  id: number

  @ApiProperty()
  title: string

  @ApiProperty({ required: false, nullable: true })
  description: string | null

  @ApiProperty()
  userId: number

  constructor(partial: Partial<PlaylistEntity>) {
    Object.assign(this, partial)
  }
}
