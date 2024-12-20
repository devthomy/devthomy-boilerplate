import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Avatar from "./Avatar";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-12 pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-6" variant="secondary">
            🏆 #1 Product of the Day on Product Hunt
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Ship your startup{" "}
            <span className="relative whitespace-nowrap text-primary">
              <span className="relative">in days,</span>
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-primary/30 blur"></span>
            </span>{" "}
            not weeks
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            The ultimate NextJS boilerplate packed with everything you need to
            build your SaaS, AI tool, or any web app and start generating
            revenue quickly.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href={"/dashboard"}>
              <Button size="lg" className="gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                </span>
                Get ShipFast Now
              </Button>
            </Link>
            <div className="text-sm text-green-500 dark:text-green-400">
              $100 off for the first 5520 customers (only 7 left!)
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Avatar />
            <div className="flex flex-col items-start gap-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="text-yellow-500">★★★★★</span>
                <span>Rated 5/5</span>
              </span>
              Join 5513+ makers shipping faster with ShipFast
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            git clone ship-fast
          </code>
        </div>
      </div>
    </div>
  );
}
