import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    account_type: "admin" | "staff" | "student";
  }

  interface Session extends DefaultSession {
    user: {
      id: string;
      email: string;
      name?: string;
      account_type: "admin" | "staff" | "student";
    };
  }

  interface JWT {
    id: string;
    account_type: "admin" | "staff" | "student";
  }
}
