export interface User {
    id: string;
    userId: string;
    email: string;
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