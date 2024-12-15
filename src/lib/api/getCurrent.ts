import { User } from "@/interface/user";
import api from "./api";

export const getCurrentUser = async (token: string) => {
  try {
    const response = await api.get<User>('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching current user:', error);
    throw error;
  }
};
