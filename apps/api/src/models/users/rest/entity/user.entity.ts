import { User } from '@prisma/client';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RestrictProperties } from 'src/common/dtos/common.input';

export class UserEntity implements RestrictProperties<UserEntity, User> {
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  image: string;
}
