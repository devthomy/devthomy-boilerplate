"use client";
import { createContext, useContext, useState } from "react";
import { User } from "@/interface/user";

type UserContextType = {
  user: User;
  setUser: (user: User) => void;
};

const UserContext = createContext<UserContextType>({
  user: {} as User,
  setUser: () => {},
});

export const UserWrapper = ({
  children,
  initialData,
}: { 
  children: React.ReactNode, 
  initialData: User 
}) => {
  const [user, setUser] = useState<User>(initialData);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserWrapper');
  }
  return context;
}