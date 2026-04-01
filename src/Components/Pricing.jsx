import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for getting started",
    price: 0,
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    buttonText: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    subtitle: "Best for professionals",
    price: 29,
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    buttonText: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    subtitle: "For teams and businesses",
    price: 99,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    buttonText: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto text-center mt-20 mb-10 px-4">
        <h1 className="font-extrabold text-5xl pb-5">
          Simple, Transparent Pricing
        </h1>
        <p className="text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="flex flex-col md:flex-row max-w-6xl px-4 mx-auto mb-20 justify-between gap-6">
        {plans.map((item) => (
          <div
            className={`flex flex-col flex-1 p-5 border border-zinc-300 rounded-lg ${item.highlighted ? "relative bg-linear-to-b from-[#4F39F6] to-[#9514FA] text-white border-none" : ""}`}
          >
            {item.highlighted && (
              <div className="badge bg-yellow-100 text-amber-700 absolute -top-3 left-1/2 -translate-x-1/2  px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                Most Popular
              </div>
            )}
            <div className="flex-1 space-y-5 mb-5">
              <h1 className="font-bold text-2xl">{item.name}</h1>
              <p
                className={`${item.highlighted ? "text-white" : "text-[#627382]"}`}
              >
                {item.subtitle}
              </p>
              <p>
                <span className="font-bold text-4xl">${item.price}</span>
                /Month{" "}
              </p>
              <ul>
                {item.features.map((feat) => (
                  <div className="flex  items-center gap-3">
                    {item.highlighted ? (
                      <Check color="white" size={16} />
                    ) : (
                      <img src="/Check.png" alt="" />
                    )}
                    <li
                      className={`font-medium ${item.highlighted ? "text-white" : "text-[#627382]"}`}
                    >
                      {feat}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <button
              className={`btn rounded-full w-full mt-auto border-none ${
                item.highlighted
                  ? "bg-white"
                  : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
              }`}
            >
              {item.highlighted ? (
                <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">
                  {item.buttonText}
                </span>
              ) : (
                item.buttonText
              )}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pricing;
