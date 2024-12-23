"use client";
import { ThemeToggle } from "@/components/ThemeButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex items-center justify-between p-4">
      <div>
        <Link href="/">
          <Image src="logo.svg" alt="Logo" width={50} height={50} />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {!session && (
          <div className="flex gap-4">
            <Button>
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button>
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </div>
        )}

        {session && (
          <div className="flex items-center gap-4">
            <span className="text-sm">
              {session.user?.name || session.user?.email}
            </span>
            <Button onClick={() => signOut()}>
              Sign out
            </Button>
          </div>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}
