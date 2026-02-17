import { userRoles } from '../dto/CreateUserDto';

export interface UserEntity {
  username: string;
  email: string;
  age: number;
  role: userRoles;
  password: string;
}
