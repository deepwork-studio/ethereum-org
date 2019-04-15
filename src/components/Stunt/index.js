import React from "react";
import { Box } from "rebass";

import Container from "../Container";
import Paragraph from "../Paragraph";
import { ExternalLink } from "../Links";

const Stunt = () => (
  <Box bg="primary" py={7}>
    <Container px={[4, 0]}>
      <Paragraph>
        This site is a demo project by the team at Deep Work Studio
      </Paragraph>
      <ExternalLink color="textinactive" href="https://medium.com/deep-work-studio">
        Learn why we did this →
      </ExternalLink>
    </Container>
  </Box>
);

export default Stunt;
