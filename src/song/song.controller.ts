import {
  Controller,
  Get,
  Post,
  Body,
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

import { SongService } from './song.service'
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard'
import { SongDTO } from './dto/song.dto'
import { SongEntity } from './entity/song.entity'

@Controller('songs')
@ApiTags('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Post()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: SongEntity })
  async create(@Body() songDto: SongDTO, @Request() req) {
    return await this.songService.create(songDto, req.user)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SongEntity, isArray: true })
  async findAll() {
    const songs = await this.songService.findAll()
    return songs.map((song) => new SongEntity(song)) // Map to SongEntity if needed
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SongEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.songService.findOne(id)
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SongEntity })
  async remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return await this.songService.remove(id, req.user)
  }
}
