import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          baseTheme: dark,
          //baseTheme: light,
        }}
      >
        <body>
          <main>{children}</main>
        </body>
      </ClerkProvider>
    </html>
  )
}