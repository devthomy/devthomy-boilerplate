"use client";
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
      <SignedOut>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <SignInButton mode="modal" />

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
        <div className="flex items-center gap-4 bg-neutral-800 hover:bg-neutral-700 transition-colors p-4 rounded-full font-medium">
          <span>{user.user?.username || "User"}</span>
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
  );
}
