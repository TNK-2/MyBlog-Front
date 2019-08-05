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

export interface EntryState {
  entries: Entry[];
}

export interface Entry {
  id: String;
  title: String;
  content: String;
  date: String;
}