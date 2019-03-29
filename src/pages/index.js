import React from "react";
import { Flex } from "rebass";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Card from "../components/Card";
import Paragraph from "../components/Paragraph";
import Header from "../components/Header";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Flex>
      <Card flex={1} bg="primary" gradient="richblue" pt={40 + 6} pb={4} px={4}>
        <Header color="richblue">Build Unstoppable Organisations</Header>
        <Paragraph fontSize={3} mb={0} mt={2}>
          Developer Tools
        </Paragraph>
      </Card>
      <Card flex={1} bg="primary" gradient="gossamer" pt={40 + 6} pb={4} px={4}>
        <Header color="gossamer">Why Ethereum</Header>
        <Paragraph fontSize={3} mb={0} mt={2}>
          Learn
        </Paragraph>
      </Card>
      <Card flex={1} bg="primary" gradient="tapestry" pt={40 + 6} pb={4} px={4}>
        <Header color="tapestry">News and Community</Header>
        <Paragraph fontSize={3} mb={0} mt={2}>
          Newsroom
        </Paragraph>
      </Card>
    </Flex>
  </Layout>
);

export default IndexPage;
