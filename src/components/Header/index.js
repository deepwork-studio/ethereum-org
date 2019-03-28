import React from "react";
import { Heading } from "rebass";

const Header = props => (
  <Heading {...props} fontFamily="raleway" fontWeight="extrabold" />
);

Header.defaultProps = {
  fontSize: 4
};

export default Header;
