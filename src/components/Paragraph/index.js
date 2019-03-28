import React from "react";
import { Text } from "rebass";

const Paragraph = props => <Text {...props} as="p" fontFamily="worksans" />;

Paragraph.defaultProps = {
  color: "text"
};

export default Paragraph;
