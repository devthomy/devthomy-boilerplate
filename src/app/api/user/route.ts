import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { User } from "@/interface/user";

export const GET = async () => {
  const { userId } = await auth();
        
  if (!userId) {
    console.log("User ID not found");
    return NextResponse.json({ error: "User ID not found" }, { status: 400 });
  }

  try {
    let user: User | null = await prisma.user.findUnique({
      where: { userId: userId },
    });

    if (!user) {
      const clerkUser = await currentUser();
      if (!clerkUser) {
        return NextResponse.json({ error: "Clerk user not found" }, { status: 404 });
      }
      
      user = await prisma.user.create({
        data: {
          userId: userId,
          email: clerkUser.emailAddresses[0].emailAddress,
        },
      });

      console.log(`\x1b[32mUser created with userId\x1b[0m`);
    } else {
      console.log(`\x1b[36mUser found with userId\x1b[0m`);
    }

    return NextResponse.json(user);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};