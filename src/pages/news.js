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
import Stunt from "../components/Stunt";

const IndexPage = () => (
  <Layout>
    <SEO title="News" />

    <GradientBar gradient="tapestry" />

    <Container px={[4, 0]}>
      <News mb={4} mt={[6, 7]} />
      <Caps>Newsroom</Caps>
      <Header>Community and News</Header>
    </Container>

    <Stunt />
  </Layout>
);

export default IndexPage;
