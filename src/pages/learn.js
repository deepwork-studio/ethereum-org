import React from "react";
import { Flex, Text, Box } from "rebass";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Card, { GradientBar } from "../components/Card";
import Paragraph from "../components/Paragraph";
import Caps from "../components/Caps";
import Header from "../components/Header";
import Container from "../components/Container";
import { Row, Col } from "../components/Grid";
import { Developers, Logo, Learn, News } from "../components/Images";
import Stunt from "../components/Stunt";

const IndexPage = () => (
  <Layout>
    <SEO title="Learn" />

    <GradientBar gradient="gossamer" />

    <Box as="section" mt={[128 + 6, 256 + 6]} mb={[6, 7]}>
      <Container px={[4, 0]}>
        <Box>
          <Developers />
          <Caps mt={4} mb={2}>
            learn
          </Caps>
          <Header fontSize="xxlarge">Why Ethereum?</Header>
        </Box>
      </Container>
    </Box>

    <Box my={[6, 7]}>
      <Container px={[4, 0]}>
        <Paragraph mt={0} mb={5} lineHeight="double">
          <Text fontWeight="bold" as="span">
            The how and the why
          </Text>
          <Text as="br" />
          Top voted community resources:
        </Paragraph>
      </Container>
    </Box>

    <Stunt />
  </Layout>
);

export default IndexPage;
