import React from "react";
import PropTypes from "prop-types";
import { Box } from "rebass";

import "modern-normalize";

import "typeface-raleway";
import "typeface-work-sans";

import Theme from "../Theme";

const Layout = ({ children }) => (
  <Theme>
    <Box as="main">{children}</Box>
  </Theme>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
