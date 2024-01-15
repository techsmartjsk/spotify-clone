import { PartialType } from '@nestjs/swagger'
import { User } from './user.dto'

export class UpdateUserDto extends PartialType(User) {}
