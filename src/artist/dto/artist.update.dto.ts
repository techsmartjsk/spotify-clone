import { PartialType } from '@nestjs/swagger'
import { ArtistDTO } from './article.dto'

export class UpdateArtistDTO extends PartialType(ArtistDTO) {}
