export type LoginProps = {
  isOpen: boolean;
  isLoggedIn: boolean;
  token: string | null;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    roles: {
      id: number;
      name: string;
    }[];
  } | null;
};
