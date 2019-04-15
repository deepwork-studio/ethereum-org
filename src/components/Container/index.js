import React from "react";
import { Box } from "rebass";
import { css } from "styled-components";

const Container = props => (
  <Box
    {...props}
    px={4}
    mx="auto"
    css={css`
      max-width: 960px;
    `}
  />
);

export default Container;
