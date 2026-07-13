"use client";
import Link from "next/link";

import { useState } from "react";
import {
  Check,
  Smartphone,
  Tablet,
  Laptop,
  Tv,
  Globe,
  ChevronDown,
} from "lucide-react";
import ProfileSelector from "@/app/components/ProfileCard";

// File location: app/signin/plan-selection/page.tsx (adjust path to your routing)

const plans = [
  {
    id: "mobile",
    name: "Mobile",
    price: "₹149",
    quality: "Good",
    resolution: "480p",
    devices: ["phone"],
  },
  {
    id: "basic",
    name: "Basic",
    price: "₹199",
    quality: "Good",
    resolution: "480p",
    devices: ["phone", "tablet", "laptop", "tv"],
  },
  {
    id: "standard",
    name: "Standard",
    price: "₹499",
    quality: "Better",
    resolution: "1080p",
    devices: ["phone", "tablet", "laptop"],
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹649",
    quality: "Best",
    resolution: "4K+HDR",
    devices: ["phone", "tablet", "laptop", "tv"],
  },
];

const deviceIcon = {
  phone: Smartphone,
  tablet: Tablet,
  laptop: Laptop,
  tv: Tv,
};

const deviceLabel = {
  phone: "Phone",
  tablet: "Tablet",
  laptop: "Computer",
  tv: "TV",
};

const checklist = [
  "Watch all you want. Ad-free.",
  "Recommendations just for you.",
  "Change or cancel your plan anytime.",
];

export default function PlanSelection() {
  const [selectedPlan, setSelectedPlan] = useState("basic");
  const [showProfile, setShowProfile] = useState(false);

  const handleNext = () => {
    // Renders app/components/ProfileCard.tsx once a plan is chosen
    setShowProfile(true);
  };

  // Once Next is clicked, swap the plan-selection UI for the profile screen
  if (showProfile) {
    return <ProfileSelector selectedPlan={selectedPlan} />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-200 px-4 py-4 md:px-8">
        <span className="text-2xl font-bold tracking-tight text-red-600 md:text-3xl">
          NETFLIX
        </span>
        <a href="#" className="text-sm font-medium text-black hover:underline">
          Sign Out
        </a>
      </header>

      {/* Main content */}
      <main className="flex-1 px-4 py-8 md:px-8">
        <p className="text-sm text-gray-500">Step 3 of 3</p>
        <h1 className="mt-1 text-2xl font-medium text-gray-900 md:text-3xl">
          Choose the plan that&apos;s right for you
        </h1>

        {/* Checklist */}
        <ul className="mt-4 space-y-1.5">
          {checklist.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-gray-700"
            >
              <Check className="h-4 w-4 flex-shrink-0 text-red-600" />
              {item}
            </li>
          ))}
        </ul>

        {/* Plan cards — first column left empty so cards sit above the
            table's 4 data columns, matching the row-label column below */}
        <div className="mt-6 grid grid-cols-[180px_repeat(4,1fr)] gap-2 md:gap-4">
          <div aria-hidden="true" />
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            return (
              <div key={plan.id} className="relative">
                <button
                  type="button"
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`flex h-24 w-full flex-col items-center justify-center rounded-md text-center transition md:h-28 ${
                    isSelected
                      ? "bg-red-600 text-white"
                      : "bg-[#e46f81] text-white hover:bg-[#d9596d]"
                  }`}
                >
                  <span className="text-sm font-medium md:text-base">
                    {plan.name}
                  </span>
                </button>
                {isSelected && (
                  <span
                    className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-red-600"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Comparison table */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse text-left text-sm">
            <colgroup>
              <col style={{ width: "180px" }} />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 pr-4 text-gray-500">Neque ut</td>
                {plans.map((plan) => (
                  <td
                    key={plan.id}
                    className={`py-3 px-2 text-center ${
                      selectedPlan === plan.id
                        ? "font-medium text-red-600"
                        : "text-gray-700"
                    }`}
                  >
                    {plan.price}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 pr-4 text-gray-500">Viverra auctor</td>
                {plans.map((plan) => (
                  <td
                    key={plan.id}
                    className={`py-3 px-2 text-center ${
                      selectedPlan === plan.id
                        ? "font-medium text-red-600"
                        : "text-gray-700"
                    }`}
                  >
                    {plan.quality}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 pr-4 text-gray-500">Varius</td>
                {plans.map((plan) => (
                  <td
                    key={plan.id}
                    className={`py-3 px-2 text-center ${
                      selectedPlan === plan.id
                        ? "font-medium text-red-600"
                        : "text-gray-700"
                    }`}
                  >
                    {plan.resolution}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 pr-4 align-top text-gray-500">
                  Sem vestibulum, luctus amet
                </td>
                {plans.map((plan) => {
                  const isSelected = selectedPlan === plan.id;
                  return (
                    <td key={plan.id} className="py-3 px-2">
                      <div className="flex flex-col items-center gap-2">
                        {(["phone", "tablet", "laptop", "tv"] as const)
                          .filter((device) => plan.devices.includes(device))
                          .map((device) => {
                            const Icon = deviceIcon[device];
                            return (
                              <div
                                key={device}
                                className={`flex flex-col items-center gap-1 ${
                                  isSelected ? "text-red-600" : "text-gray-700"
                                }`}
                              >
                                <Icon className="h-4 w-4" />
                                <span className="text-[10px]">
                                  {deviceLabel[device]}
                                </span>
                              </div>
                            );
                          })}
                      </div>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Fine print */}
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-gray-400">
          HD (720p), Full HD (1080p), Ultra HD and HDR availability is subject
          to your internet service and device capabilities. Not all content is
          available in all resolutions. See our Terms of Use for more details.
          Only people who live with you may use your account. Watch on 1
          supported device at a time with Mobile or Basic, 2 with Standard, and
          4 with Premium.
        </p>

        {/* Next button -> renders app/components/ProfileCard.tsx */}
        <div className="flex justify-center w-full">
          <Link href="/profiles">
            {" "}
            {/* Change '/profiles' to the actual route of your page */}
            <button className="flex items-center justify-center mt-8 px-10 rounded-sm bg-red-600 py-3 text-base font-medium text-white transition hover:bg-red-700 w-100">
              Next
            </button>
          </Link>
        </div>
      </main>

      {/* Footer — narrow side padding so content spans nearly edge to edge */}
      <footer className="mt-auto bg-gray-100 px-4 py-8 text-gray-500 md:px-8">
        <p className="text-sm">
          Questions? Call{" "}
          <a href="tel:000-800-040-1843" className="hover:underline">
            000-800-040-1843
          </a>
        </p>

        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-xs md:grid-cols-4">
          <li>
            <a href="#" className="hover:underline">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Help Centre
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Cookie Preferences
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Corporate Information
            </a>
          </li>
        </ul>

        <div className="mt-6">
          <button
            type="button"
            className="flex items-center gap-2 border border-gray-400 px-3 py-1.5 text-xs text-gray-600 hover:border-gray-600 hover:text-black"
          >
            <Globe className="h-4 w-4" />
            English
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>
      </footer>
    </div>
  );
}
