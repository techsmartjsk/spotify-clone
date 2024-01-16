import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { ArtistDTO } from './dto/article.dto'

@Injectable()
export class ArtistService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.artist.findMany()
  }

  async findOne(id: number) {
    return this.prisma.artist.findUnique({
      where: {
        id: id,
      },
    })
  }

  async create(artistDTO: ArtistDTO, user: any) {
    if (!user || user.role !== 'ARTIST') {
      throw new UnauthorizedException(
        'You need to be an artist to create an artist.',
      )
    }

    const createdArtist = await this.prisma.artist.create({
      data: artistDTO,
    })

    return createdArtist
  }

  async remove(id: number, user: any) {
    const existingArtist = await this.prisma.artist.findUnique({
      where: { id },
    })

    if (!existingArtist) {
      throw new NotFoundException('Artist not found.')
    }

    if (!user || user.role !== 'ARTIST' || existingArtist.id !== user.id) {
      throw new UnauthorizedException(
        'You do not have permission to delete this artist.',
      )
    }

    return this.prisma.artist.delete({
      where: {
        id: id,
      },
    })
  }
}
