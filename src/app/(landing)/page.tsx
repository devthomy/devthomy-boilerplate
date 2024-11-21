"use client";
import { ModeToggle } from "@/components/ThemeButton";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const user = useUser();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="fixed top-4 right-4">
        <ModeToggle />
      </div>

      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl">Landing Page</h1>
        <SignedOut>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <SignInButton mode="modal">
                <Button>Sign in(pop-up)</Button>
              </SignInButton>

              <Button>
                <Link href="/sign-in">Sign in(redirect)</Link>
              </Button>

              <Button>
                <Link href="/sign-up">Sign up(redirect)</Link>
              </Button>
            </div>
            <Button>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center gap-4">
            <span className="text-sm">{user.user?.username || "User"}</span>
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
      </div>
    </div>
  );
}
