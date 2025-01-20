export interface AuthDto {
  accessToken: string;
  role: UserRole;
}

export interface AppUser {
  email: string;
  password: string;
}

export interface UserInfo {
  email?: string;
  password?: string;
  username?: string;
  tmdb_key?: string;
}

export interface AppUserAuth {
  id?: string;
  username?: string;
  email?: string;
  role?: UserRole;
  tmdb_key?: string;
  jwtToken?: string;
}

export enum UserRole {
  USER = 'USER',
  SUPERUSER = 'SUPERUSER',
  ADMIN = 'ADMIN',
}
