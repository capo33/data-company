import React from 'react'
import { Button } from "../../globalStyles";
import {
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLength,
    PricingCardFeatures,
    PricingCardFeature,
  } from "./PricingStyles";

function PricingCards(props) {
  return (
    <PricingCard to={props.to}>
    <PricingCardInfo>
      <PricingCardIcon>
        {props.icon}
      </PricingCardIcon>
      <PricingCardPlan>{props.plan}</PricingCardPlan>
      <PricingCardCost>{props.price}</PricingCardCost>
      <PricingCardLength>{props.length}</PricingCardLength>
      <PricingCardFeatures>
        <PricingCardFeature>{props.users}</PricingCardFeature>
        <PricingCardFeature>{props.budget}</PricingCardFeature>
        <PricingCardFeature>{props.analytics}</PricingCardFeature>
      </PricingCardFeatures>
      <Button primary>{props.choose}</Button>
    </PricingCardInfo>
  </PricingCard>
  )
}

export default PricingCards