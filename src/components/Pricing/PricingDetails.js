import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";

export const pricingData = [
  {
    id: 1,
    to: "/sign-up",
    icon: <GiCrystalBars />,
    plan: "Starter Pack",
    price: "€99.99",
    length: "per month",
    users: "100 New Users",
    budget: "€10,000 Budget",
    analytics: "Retargeting analytics",
    choose: "Choose Plan",
  },
  {
    id: 2,
    to: "/sign-up",
    icon: <GiRock />,
    plan: "Gold Rush",
    price: "€299.99",
    length: "per month",
    users: "1000 New Users",
    budget: "€50,000 Budget",
    analytics: "Lead Gen Analytics",
    choose: "Choose Plan",
  },
  {
    id: 3,
    to: "/sign-up",
    icon: <GiCutDiamond />,
    plan: "Diamond Kings",
    price: "€999.99",
    length: "per month",
    users: "Unlimited Users",
    budget: "Unlimited Budget",
    analytics: "24/7 Support",
    choose: "Choose Plan",
  },
];
