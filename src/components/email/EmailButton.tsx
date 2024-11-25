'use client';

import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button";
import { useState } from "react";

export default function EmailButton() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendEmail = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/mail/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }


      toast({
        title: "Success",
        description: "Email sent successfully!",
        variant: "default",
      });
    } catch {
      toast({
        title: "Error",
        description: "Failed to send email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={sendEmail} disabled={isLoading} className="min-w-[200px]">
      {isLoading ? "Sending..." : "Send Email"}
    </Button>
  );
}
