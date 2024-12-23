import { DefaultSession, User as DefaultUser } from "next-auth"
import { JWT as DefaultJWT } from "next-auth/jwt"

/**
 * Add `id` to the default `session.user` and to `User`.
 * The `Session` interface refers to the `User` interface too,
 * so we ensure consistency. 
 */
declare module "next-auth" {
  interface User extends DefaultUser {
    id?: string
  }

  interface Session {
    user: {
      id?: string
    } & DefaultSession["user"]
  }
}

/**
 * Add a custom field `uid` to the JWT interface.
 */
declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    uid?: string
  }
}
