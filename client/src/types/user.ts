export interface IUser {
  id: number,
  email: string,
}

export interface IRegistration {
  email: string,
  password: string
}

export interface ILogin {
  email: string,
  password: string,
}

export interface AuthResponse {
  token: string,
  user: IUser,
}