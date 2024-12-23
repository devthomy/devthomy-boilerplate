// lib/auth.ts or wherever you define authOptions
import { type NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prisma" // your prisma client
import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"
import { Resend } from "resend" 

const resend = new Resend(process.env.RESEND_API_KEY) 

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),

    EmailProvider({
      from: process.env.EMAIL_FROM,
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      async sendVerificationRequest({ identifier, url, provider }) {
        try {
          const result = await resend.emails.send({
            from: provider.from ?? "onboarding@resend.dev", 
            to: [identifier],
            subject: "Votre lien de connexion",
            html: `
              <p>Cliquez sur le lien ci-dessous pour vous connecter:</p>
              <p><a href="${url}">Se connecter</a></p>
            `,
          })
  
          
          console.log("Email sent successfully:", result)
        } catch (error) {
          console.error("Error sending email:", error)
          throw new Error("Failed to send verification email")
        }
      },
    }),
  ],

  debug: process.env.NODE_ENV === "development",
}
