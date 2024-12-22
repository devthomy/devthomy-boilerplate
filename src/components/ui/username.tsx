'use client'
import { useUser } from "@clerk/nextjs";

export default function Username() {
    const { user } = useUser()
    
    const displayName = () => {
        if (!user) return ''
        
        if (user.username) return user.username
        
        if (user.firstName) return user.firstName
        
        return ''
    }

    return (
        <div>
            {displayName()}
        </div>
    );
}