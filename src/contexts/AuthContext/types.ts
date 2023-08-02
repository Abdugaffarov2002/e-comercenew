import { TUser } from "../../models/user";

export interface IAuthContextTypes {
  user: TUser;
  register: (credentials: IUserCredenttials) => void;
  login: (credentials: IUserCredenttials) => void;
  logout: () => void;
}
export interface IUserCredenttials {
  email: string;
  password: string;
}
