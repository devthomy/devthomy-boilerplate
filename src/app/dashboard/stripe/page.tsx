"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { plans } from "@/data/pricing";

// Stripe Plans >> fill in your own priceId & link


const Pricing = () => {
  const { user } = useUser();
  const [plan, setPlan] = useState(plans[0]);

  return (
    <div className="flex-1  flex items-center justify-center bg-gradient-to-br from-base-100 to-base-200">
      <section id="pricing" className="w-full max-w-5xl mx-auto p-6">
        <div className="py-12 px-8">
          <div className="flex flex-col text-center w-full mb-12">
            <p className="font-bold text-primary text-6xl mb-4">Pricing</p>
            <div className="flex items-center justify-center gap-8">
              <div
                className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setPlan(plans[0])}
              >
                <input
                  type="radio"
                  name="plan"
                  className="radio radio-primary"
                  checked={plan.price === 9}
                  onChange={() => {}}
                />
                <span className="font-medium">Pay monthly</span>
              </div>
              <div
                className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setPlan(plans[1])}
              >
                <input
                  type="radio"
                  name="plan"
                  className="radio radio-primary"
                  checked={plan.price === 99}
                  onChange={() => {}}
                />
                <span className="font-medium">
                  Pay yearly <span className="text-primary">(60% OFF 💰)</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <div className="relative flex flex-col h-full gap-6 bg-base-100 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-base-300">
                <div className="flex justify-center gap-2">
                  <p className="text-5xl tracking-tight font-extrabold">
                    ${plan.price}
                  </p>
                  <div className="flex flex-col justify-end mb-[4px]">
                    <p className="text-sm tracking-wide text-base-content/80 uppercase font-bold">
                      {plan.duration}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 leading-relaxed text-base flex-1">
                  {[
                    {
                      name: "NextJS boilerplate",
                    },
                    { name: "User oauth" },
                    { name: "Database" },
                    { name: "Emails" },
                    { name: "1 year of updates" },
                    { name: "24/7 support" },
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium">{feature.name}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Button
                    className="btn btn-primary btn-block btn-lg shadow-lg hover:shadow-xl w-full transition-all duration-200"
                    onClick={() => {
                      window.location.href =
                        plan.link +
                        "?prefilled_email=" +
                        user?.emailAddresses[0].emailAddress;
                    }}
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
