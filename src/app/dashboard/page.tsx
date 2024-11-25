import EmailButton from "@/components/email/EmailButton";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      
      <div className="flex flex-col items-center justify-center">
        Protected page
        <EmailButton />
      </div>
    </div>
  );
}
