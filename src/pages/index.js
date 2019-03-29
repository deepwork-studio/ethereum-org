import React from "react";
import { Flex, Image } from "rebass";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Card from "../components/Card";
import Paragraph from "../components/Paragraph";
import Header from "../components/Header";
import Container from "../components/Container";
import { Row, Col } from "../components/Grid";

import developers from "../images/developers.svg";
import learn from "../images/learn.svg";
import news from "../images/news.svg";
import logo from "../images/ethereum-logo.svg";

const IndexPage = () => (
  <Layout>
    <SEO />

    <Flex css={{ height: "100vh" }} alignItems="center">
      <Container>
        <Image src={logo} mb={5} height={60} />

        <Row>
          <Col>
            <Card
              flex={1}
              bg="primary"
              gradient="richblue"
              pt={40 + 6}
              pb={4}
              px={4}
            >
              <Image src={developers} mb={80} />
              <Header lineHeight={1.5} as="h2" color="richblue">
                Build Unstoppable Organizations
              </Header>
              <Paragraph fontSize={3} mb={0} mt={2}>
                Developer Tools
              </Paragraph>
            </Card>
          </Col>
          <Col>
            <Card
              flex={1}
              bg="primary"
              gradient="gossamer"
              pt={40 + 6}
              pb={4}
              px={4}
            >
              <Image src={learn} mb={80} />
              <Header lineHeight={1.5} as="h2" color="gossamer">
                Why Ethereum?
              </Header>
              <Paragraph fontSize={3} mb={0} mt={2}>
                Learn
              </Paragraph>
            </Card>
          </Col>
          <Col>
            <Card
              flex={1}
              bg="primary"
              gradient="tapestry"
              pt={40 + 6}
              pb={4}
              px={4}
            >
              <Image src={news} mb={80} />
              <Header lineHeight={1.5} as="h2" color="tapestry">
                News and Community
              </Header>
              <Paragraph fontSize={3} mb={0} mt={2}>
                Newsroom
              </Paragraph>
            </Card>
          </Col>
        </Row>

        <Paragraph fontSize={3} mt={5}>
          The worlds largest community solving global challenges and
          democratizing the internet.
        </Paragraph>
      </Container>
    </Flex>
  </Layout>
);

export default IndexPage;
