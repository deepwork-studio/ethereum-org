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
    <SEO title="Developers" />

    <GradientBar gradient="richblue" />

    <Container px={[4, 0]}>
      <Developers mb={4} />
      <Caps>Problems to solve</Caps>
      <Header>What could you build?</Header>
    </Container>
  </Layout>
);

export default IndexPage;
