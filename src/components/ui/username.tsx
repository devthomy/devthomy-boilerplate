'use client'
import { useUser } from "@clerk/nextjs";

export default function Username() {
    const { user } = useUser()
    
    const displayName = () => {
        const email = user?.emailAddresses[0].emailAddress
        if (!email) return ''
        
        if (user?.username) return user.username
        
        if (email.length > 20) {
            return email.substring(0, 23) + '...'
        }
        
        return email
    }

    return (
        <div>
            {displayName()}
        </div>
    );
}