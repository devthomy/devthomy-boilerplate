import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const users = [
  { url: "/memoji/1.png", name: "John" },
  { url: "/memoji/2.png", name: "Jane" },
  { url: "/memoji/3.png", name: "Jim" },
  { url: "/memoji/4.png", name: "Jill" },
];

export default function Avatar() {
  return (
    <div className="flex -space-x-2 sm:-space-x-4">
      {users.map((user, index) => (
        <motion.div
          key={user.name}
          className="hover:-translate-y-1 transition-transform duration-200 ease-in-out relative"
          initial={{ y: 0 }}
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.2,
          }}
        >
          <Image
            src={user.url}
            alt={user.name}
            width={50}
            height={50}
            className={cn(
              "w-8 h-8 sm:w-[50px] sm:h-[50px] rounded-full bg-background border-2",
              "border-border dark:border-muted"
            )}
          />
        </motion.div>
      ))}
    </div>
  );
}
