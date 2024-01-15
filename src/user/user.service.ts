// src/users/users.service.ts
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import * as bcrypt from 'bcrypt'
import { User } from './dto/user.dto'
import { UpdateUserDto } from './dto/update.user.dto'

export const roundsOfHashing = 10

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(userDto: User) {
    const hashedPassword = await bcrypt.hash(userDto.password, roundsOfHashing)

    userDto.password = hashedPassword

    return this.prisma.user.create({
      data: userDto,
    })
  }

  findAll() {
    return this.prisma.user.findMany()
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        roundsOfHashing,
      )
    }

    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    })
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } })
  }
}
