import React from "react";
import { Box } from "rebass";

const Container = props => (
  <Box
    {...props}
    mx="auto"
    css={{
      maxWidth: 960
    }}
  />
);

export default Container;
