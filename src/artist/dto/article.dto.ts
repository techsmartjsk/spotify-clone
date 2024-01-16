import { ApiProperty } from '@nestjs/swagger'

export class ArtistDTO {
  @ApiProperty()
  name: string

  constructor(partial: Partial<ArtistDTO>) {
    Object.assign(this, partial)
  }
}
