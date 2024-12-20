'use client'
import { useUser } from "@/context/UserContext";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <h2 className="text-xl font-bold mb-4">Welcome, {user.email}!</h2>
        <p>User ID: {user.userId}</p>
      </div>
    </div>
  );
}
