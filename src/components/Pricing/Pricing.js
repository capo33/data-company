import React from "react";
import { pricingData } from "./PricingDetails";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
} from "./PricingStyles";
import PricingCards from "./PricingCards";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            {pricingData.map((pricing) => {
              return (
                <PricingCards
                  key={pricing.id}
                  to={pricing.to}
                  icon={pricing.icon}
                  plan={pricing.plan}
                  price={pricing.price}
                  length={pricing.length}
                  users={pricing.users}
                  budget={pricing.budget}
                  analytics={pricing.analytics}
                  choose={pricing.choose}
                />
              );
            })}
            {/* <PricingCards
          to="/sign-up"
          icon={<GiCrystalBars /> }
          plan="Starter Pack"
          price="$99.99"
          length="per month"
          users="100 New Users"
          budget="$10,000 Budget"
          analytics="Retargeting analytics"
          choose="Choose Plan" /> */}
            {/* <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 New Users</PricingCardFeature>
                  <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard> */}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
