import { InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@InputType()
export class UserWhereUniqueInput {
  id: number;
}

@InputType()
export class UserWhereInputStrict
  implements RestrictProperties<UserWhereInputStrict, Prisma.UserWhereInput>
{
  uid: string | Prisma.StringFilter<'User'>;
  createdAt: string | Date | Prisma.DateTimeFilter<'User'>;
  updatedAt: string | Date | Prisma.DateTimeFilter<'User'>;
  name: string | Prisma.StringNullableFilter<'User'>;
  image: string | Prisma.StringNullableFilter<'User'>;
  Credentials: Prisma.CreddentialsListRelationFilter;
  AuthProvider: Prisma.AuthproviderListRelationFilter;
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: UserWhereInput[];
  OR: UserWhereInput[];
  NOT: UserWhereInput[];
}

@InputType()
export class UserWhereInput extends PartialType(UserWhereInputStrict) {}

@InputType()
export class UserListRelationFilter {
  every?: UserWhereInput;
  some?: UserWhereInput;
  none?: UserWhereInput;
}

@InputType()
export class UserRelationFilter {
  is?: UserWhereInput;
  isNot?: UserWhereInput;
}
