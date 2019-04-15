import React from "react";
import { Box, Flex } from "rebass";

import Caps from "../Caps";
import { GradientBar } from "../Card";
import { InternalLink } from "../Links";
import Container from "../Container";

const Nav = () => (
  <Box
    css={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 99999
    }}
  >
    <Container>
      <Flex bg="primary" color="text">
        <Flex
          flex={1}
          alignItems="center"
          justifyContent="center"
          css={{ position: "relative" }}
        >
          <GradientBar gradient="richblue" />
          <InternalLink to="/developers/">
            <Caps m={0} py={4}>
              Developers
            </Caps>
          </InternalLink>
        </Flex>
        <Flex
          flex={1}
          alignItems="center"
          justifyContent="center"
          css={{ position: "relative" }}
        >
          <GradientBar gradient="tapestry" />
          <InternalLink to="/learn/">
            <Caps m={0} py={4}>
              Learn
            </Caps>
          </InternalLink>
        </Flex>
        <Flex
          flex={1}
          alignItems="center"
          justifyContent="center"
          css={{ position: "relative" }}
        >
          <GradientBar gradient="gossamer" />
          <InternalLink to="/news/">
            <Caps m={0} py={4}>
              News
            </Caps>
          </InternalLink>
        </Flex>
      </Flex>
    </Container>
  </Box>
);

export default Nav;
