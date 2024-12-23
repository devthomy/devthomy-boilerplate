"use client";
import Footer from "@/components/landing/layout/Footer";
import Header from "@/components/landing/layout/Header";
import { Hero } from "@/components/landing/Hero";
import { Suspense } from "react";
import { useSession, signOut, signIn } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        {!session ? (
          <div>
            You are not signed in
            <button onClick={() => signIn()}>Sign In</button>
          </div>
        ) : (
          <div>
            Welcome, {session.user?.name}!
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
