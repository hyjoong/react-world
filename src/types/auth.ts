export type LoginForm = {
  email: string;
  password: string;
};

export type LoginRequest = {
  user: LoginForm;
};

type User = {
  email: string;
  username: string;
  bio: string | null;
  image: string;
  token: string;
};

export type UserResponse = {
  user: User;
  errors?: unknown;
};
