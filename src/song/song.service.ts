import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { SongDTO } from './dto/song.dto'

@Injectable()
export class SongService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.song.findMany()
  }

  findOne(id: number) {
    return this.prisma.song.findUnique({
      where: {
        id: id,
      },
    })
  }

  async create(songDTO: SongDTO, user: any) {
    if (!user) {
      throw new UnauthorizedException(
        'You need to be authenticated to create a song.',
      )
    }

    const createdSong = await this.prisma.song.create({
      data: {
        ...songDTO,
        artistId: user.id,
      },
    })

    return createdSong
  }

  async remove(id: number, user: any) {
    const existingSong = await this.prisma.song.findUnique({ where: { id } })

    if (!existingSong) {
      throw new UnauthorizedException('Song not found.')
    }

    if (existingSong.artistId !== user.id) {
      throw new UnauthorizedException(
        'You do not have permission to delete this song.',
      )
    }

    return this.prisma.song.delete({
      where: {
        id: id,
      },
    })
  }
}
