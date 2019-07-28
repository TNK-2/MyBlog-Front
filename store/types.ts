export interface RootState {
  version: string;
}


export interface AuthState {
  auth?: Auth;
}

export interface Auth {
  token?: String;
  isAuthenticated: Boolean;
}