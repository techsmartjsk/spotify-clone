import { ApiProperty } from '@nestjs/swagger'
import { SongEntity } from 'src/song/entity/song.entity'

export class ArtistEntity {
  @ApiProperty()
  id: number

  @ApiProperty()
  name: string

  @ApiProperty({ type: () => SongEntity, isArray: true })
  songs: SongEntity[]

  constructor(partial: Partial<ArtistEntity>) {
    Object.assign(this, partial)
  }
}
