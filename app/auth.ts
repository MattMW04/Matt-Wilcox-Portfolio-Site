import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import pool from "@/lib/mysql";
import { RowDataPacket } from "mysql2";
import { JWT } from "next-auth/jwt";
import { NextAuthOptions, User } from "next-auth";

// Define a custom user type to extend NextAuth's default User
interface CustomUser extends User {
  account_type: "admin" | "staff" | "student";
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const [rows] = await pool.execute<RowDataPacket[]>(
            "SELECT * FROM User WHERE email = ?",
            [credentials.email]
          );

          if (rows.length === 0) {
            return null;
          }

          const foundUser = rows[0];

          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            foundUser.password
          );

          if (!isPasswordValid) {
            return null;
          }

          return {
            id: String(foundUser.user_id),
            email: foundUser.email,
            name: foundUser.name,
            account_type: foundUser.account_type as
              | "admin"
              | "staff"
              | "student",
          } as CustomUser;
        } catch (error) {
          console.error("Login Error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 30, // 30 minutes
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: CustomUser }) {
      if (user) {
        token.id = user.id;
        token.account_type = user.account_type;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.account_type = token.account_type as
          | "admin"
          | "staff"
          | "student";
      }
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
};
