import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  Request,
} from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'

import { PlaylistService } from './playlist.service'
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard'
import { PlaylistDTO } from './dto/playlist.dto'
import { PlaylistEntity } from './entity/playlist.entity'

@Controller('playlists')
@ApiTags('playlists')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Post()
  @ApiCreatedResponse({ type: PlaylistEntity })
  async create(@Body() playlistDto: PlaylistDTO, @Request() req) {
    return await this.playlistService.create(playlistDto, req.user)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: PlaylistEntity, isArray: true })
  async findAll() {
    const playlists = await this.playlistService.findAll()
    return playlists.map((playlist) => playlist) // You might want to create a PlaylistEntity if needed
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: PlaylistEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.playlistService.findOne(id)
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: PlaylistEntity })
  async remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return await this.playlistService.remove(id, req.user)
  }
}
