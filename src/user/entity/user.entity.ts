import { ApiProperty } from '@nestjs/swagger'
import { $Enums, User } from '@prisma/client'
import { Exclude } from 'class-transformer'

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial)
  }

  @ApiProperty()
  username: string

  @ApiProperty()
  role: $Enums.UserRole

  @ApiProperty()
  id: number

  @ApiProperty()
  name: string

  @ApiProperty()
  email: string

  @Exclude()
  password: string
}
