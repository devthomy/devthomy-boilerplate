"use client";
import { ThemeToggle } from "@/components/ThemeButton";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  const user = useUser();

  return (
    <header className="flex items-center justify-between p-4">
      <div>
        <Link href="/">
          <span className="text-xl font-bold">Logo</span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <SignedOut>
          <div className="flex gap-4">
            <SignInButton mode="modal">
              <Button>Sign in(popup)</Button>
            </SignInButton>
            <Button>
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button>
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center gap-4">
            <span className="text-sm">
              {user.user?.username || user.user?.emailAddresses[0].emailAddress}
            </span>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8",
                },
              }}
            />
          </div>
        </SignedIn>
        <ThemeToggle />
      </div>
    </header>
  );
}
