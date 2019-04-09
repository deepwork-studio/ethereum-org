import React from "react";
import { Flex } from "rebass";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Card, { GradientBar } from "../components/Card";
import Paragraph from "../components/Paragraph";
import Header from "../components/Header";
import Container from "../components/Container";
import { Row, Col } from "../components/Grid";
import { Developers, Logo, Learn, News } from "../components/Images";

const IndexPage = () => (
  <Layout>
    <SEO />

    <Flex css={{ minHeight: "100vh" }} alignItems="center">
      <Container px={[4, 0]}>
        <News mb={80} />
      </Container>
    </Flex>
  </Layout>
);

export default IndexPage;
