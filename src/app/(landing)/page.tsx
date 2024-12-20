"use client";
import Footer from "@/components/landing/layout/Footer";
import Header from "@/components/landing/layout/Header";
import { Hero } from "@/components/landing/Hero";
import { Suspense } from "react";

export default function Home() {

  return (
    <>
    <Suspense>
      <Header />
      </Suspense>
      <main>
        <Hero />



      </main>
      <Footer />
    </>
  );
}
