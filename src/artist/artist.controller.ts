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

import { ArtistService } from './artist.service'
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard'
import { ArtistDTO } from './dto/article.dto'
import { ArtistEntity } from './entity/article.entity'

@Controller('artists')
@ApiTags('artists')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Post()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ArtistEntity })
  async create(@Body() artistDto: ArtistDTO, @Request() req) {
    return await this.artistService.create(artistDto, req.user)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: ArtistEntity, isArray: true })
  async findAll() {
    const artists = await this.artistService.findAll()
    return artists.map((artist) => new ArtistEntity(artist)) // Map to ArtistEntity if needed
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: ArtistEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.artistService.findOne(id)
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: ArtistEntity })
  async remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return await this.artistService.remove(id, req.user)
  }
}
