import React from "react";
import { Flex, Text } from "rebass";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Card, { GradientBar } from "../components/Card";
import Paragraph from "../components/Paragraph";
import Caps from "../components/Caps";
import Header from "../components/Header";
import Container from "../components/Container";
import { Row, Col } from "../components/Grid";
import { Developers, Logo, Learn, News } from "../components/Images";

const IndexPage = () => (
  <Layout css={{ position: "relative" }}>
    <SEO title="Learn" />

    <GradientBar gradient="gossamer" />

    <Container px={[4, 0]}>
      <Learn mb={4} />
      <Caps>learn</Caps>
      <Header>Why Ethereum?</Header>
    </Container>
  </Layout>
);

export default IndexPage;
