import React from "react";
import { Input, LabelInputContainer } from "./StyledComponents";

export default ({ label, ...props }) => (
  <LabelInputContainer>
    <text>{label}</text>
    <Input {...props} />
  </LabelInputContainer>
);
