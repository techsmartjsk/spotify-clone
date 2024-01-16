// src/users/users.service.ts
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import * as bcrypt from 'bcrypt'
import { Prisma } from '@prisma/client'

export const roundsOfHashing = 10

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async create(userDto: Prisma.UserCreateInput) {
    const hashedPassword = await bcrypt.hash(userDto.password, roundsOfHashing)

    userDto.password = hashedPassword

    return this.prismaService.user.create({
      data: userDto,
    })
  }

  findAll() {
    return this.prismaService.user.findMany()
  }

  findOne(id: number) {
    return this.prismaService.user.findUnique({ where: { id } })
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        roundsOfHashing,
      )
    }

    return this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    })
  }

  remove(id: number) {
    return this.prismaService.user.delete({ where: { id } })
  }
}
