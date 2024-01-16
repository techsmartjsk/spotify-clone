import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { PlaylistDTO } from './dto/playlist.dto'

@Injectable()
export class PlaylistService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.playlist.findMany()
  }

  findOne(id: number) {
    return this.prisma.playlist.findUnique({
      where: {
        id: id,
      },
    })
  }

  create(playlistDTO: PlaylistDTO, user: any) {
    // Use the 'user' object, which should contain user information from the token
    return this.prisma.playlist.create({
      data: {
        ...playlistDTO,
        userId: user.id, // Assuming user information has an 'id' property
      },
    })
  }

  async update(id: number, playlistDTO: PlaylistDTO, user: any) {
    const existingPlaylist = await this.prisma.playlist.findUnique({
      where: { id },
    })

    if (!existingPlaylist || existingPlaylist.userId !== user.id) {
      throw new UnauthorizedException(
        'You do not have permission to update this playlist.',
      )
    }

    return this.prisma.playlist.update({
      where: {
        id: id,
      },
      data: playlistDTO,
    })
  }

  async remove(id: number, user: any) {
    const existingPlaylist = await this.prisma.playlist.findUnique({
      where: { id },
    })

    if (!existingPlaylist || existingPlaylist.userId !== user.id) {
      throw new UnauthorizedException(
        'You do not have permission to delete this playlist.',
      )
    }

    return this.prisma.playlist.delete({
      where: {
        id: id,
      },
    })
  }
}
