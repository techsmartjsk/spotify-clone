import { PartialType } from '@nestjs/swagger'
import { SongDTO } from './song.dto'

export class UpdateSongDTO extends PartialType(SongDTO) {}
