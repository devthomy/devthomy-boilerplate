export interface User {
    id: string;
    userId: string;
    email: string;
    emailVerified?: Date | null;
    image?: string | null;
    name?: string | null;
    createdAt: Date;
    updatedAt: Date;
    subscription?: UserSubscription;
}

export interface UserSubscription {
    id: string;
    userId: string;
    user: User;
    stripeCustomerId?: string;
    stripePriceId?: string;
    stripeCurrentPeriodEnd?: Date;
    stripeSubscriptionId?: string;
    createdAt: Date;
    updatedAt: Date;
}