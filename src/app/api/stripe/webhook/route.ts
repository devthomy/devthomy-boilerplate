import prisma from '@/lib/prisma';
import { stripe } from "@/lib/stripe"; 
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { plans } from '@/data/pricing';

const settingsUrl = "http://localhost:3000/displayVideo";

export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!user || !userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const url = new URL(req.url);
    const planId = url.searchParams.get("planId");

    if (!planId) {
      return new NextResponse("Plan ID is required", { status: 400 });
    }

    // Trouver le plan correspondant dans vos plans de tarification
    const plan = plans.find(
      (p) => p.priceId.toLowerCase() === planId.toLowerCase()
    );

    if (!plan || !plan.priceId) {
      return new NextResponse("Invalid plan ID", { status: 400 });
    }

    // Vérifier si l'utilisateur a déjà un abonnement
    const userSubscription = await prisma.userSubscription.findUnique({
      where: {
        userId,
      },
    });

    if (userSubscription && userSubscription.stripeCustomerId) {
      // Rediriger vers le portail de facturation
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: settingsUrl,
      });

      return new NextResponse(
        JSON.stringify({ url: stripeSession.url }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Créer une session de paiement pour le plan sélectionné
    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      line_items: [
        {
          price: plan.priceId,
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
    });

    return new NextResponse(
      JSON.stringify({ url: stripeSession.url }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("[STRIPE_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}