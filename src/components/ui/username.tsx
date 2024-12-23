'use client'
import { useSession } from "next-auth/react";

export default function Username() {
    const { data: session } = useSession();
    const user = session?.user;
    

    const displayName = () => {
        if (!user) return ''
        
        if (user.name) return user.name
        
        if (user.email) return user.email
        
        return ''
    }

    return (
        <div>
            {displayName()}
        </div>
    );
}