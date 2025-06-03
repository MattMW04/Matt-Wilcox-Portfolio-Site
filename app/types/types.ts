// User Type
export type UserRole = "admin" | "staff" | "student";

// User
export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

// Separate type for authentication
export interface AuthUser extends User {
  password: string;
}

