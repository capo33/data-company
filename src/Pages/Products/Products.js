import React from "react";
import { InfoSection } from "../../components";
import { homeObjThree, homeObjTwo } from "./Data";

function Products() {
  return (
    <>
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Products;
