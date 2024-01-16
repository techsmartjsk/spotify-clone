import { ApiProperty } from '@nestjs/swagger'
import { ArtistEntity } from 'src/artist/entity/article.entity'
import { PlaylistEntity } from 'src/playlist/entity/playlist.entity'

export class SongEntity {
  @ApiProperty()
  id: number

  @ApiProperty()
  title: string

  @ApiProperty({ type: () => ArtistEntity }) // Assuming Artist is another Swagger-decorated entity
  artist: ArtistEntity

  @ApiProperty()
  artistId: number

  @ApiProperty()
  duration: number

  @ApiProperty({ type: () => PlaylistEntity, isArray: true }) // Assuming Playlist is another Swagger-decorated entity
  playlists: PlaylistEntity[]

  constructor(partial: Partial<SongEntity>) {
    Object.assign(this, partial)
  }
}
