import React from "react";
import { Flex } from "rebass";

const Row = props => <Flex {...props} />;

Row.defaultProps = {
  mx: -3,
  flexDirection: ["column", "row"]
};

const Col = props => <Flex {...props} />;

Col.defaultProps = {
  px: 3,
  flexDirection: "column",
  width: [null, 1 / 2]
};

export { Row, Col };
