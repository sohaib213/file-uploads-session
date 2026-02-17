import { userRoles } from 'src/users/dto/CreateUserDto';

export interface JwtPayload {
  email: string;
  role: userRoles;
}
