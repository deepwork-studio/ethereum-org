import React from "react";
import { Flex, Image, Link } from "rebass";
// import { Link } from "gatsby";

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
// import logo from "../images/ethereum-logo-better.svg";

const IndexPageCard = props => (
  <Card
    {...props}
    flex={1}
    bg="primary"
    pt={40 + 6}
    pb={4}
    px={4}
    shadow
    css={{ height: "100%" }}
  />
);

const IndexPage = () => (
  <Layout>
    <SEO />

    <Flex css={{ minHeight: "100vh" }} alignItems="center">
      <Container px={[4, 0]}>
        <Image src={logo} mb={5} mt={[4, 0]} height={60} />

        <Row>
          <Col mb={[4,0]}>
            <Link flex={1} href="https://ethereum.org">
              <IndexPageCard gradient="richblue">
                <Image src={developers} mb={80} />
                <Header lineHeight={1.5} as="h2" color="richblue">
                  Build Unstoppable Organizations
                </Header>
                <Paragraph fontSize={3} mb={0} mt={2}>
                  Developer Tools
                </Paragraph>
              </IndexPageCard>
            </Link>
          </Col>

          <Col mb={[4,0]}>
            <Link flex={1} href="https://ethereum.org">
              <IndexPageCard gradient="gossamer">
                <Image src={learn} mb={80} />
                <Header lineHeight={1.5} as="h2" color="gossamer">
                  Why Ethereum?
                </Header>
                <Paragraph fontSize={3} mb={0} mt={2}>
                  Learn
                </Paragraph>
              </IndexPageCard>
            </Link>
          </Col>

          <Col mb={[4,0]}>
            <Link flex={1} href="https://ethereum.org">
              <IndexPageCard gradient="tapestry">
                <Image src={news} mb={80} />
                <Header lineHeight={1.5} as="h2" color="tapestry">
                  News and Community
                </Header>
                <Paragraph fontSize={3} mb={0} mt={2}>
                  Newsroom
                </Paragraph>
              </IndexPageCard>
            </Link>
          </Col>
        </Row>

        <Paragraph fontSize={3} mt={[4, 5]} lineHeight={1.5}>
          The worlds largest community solving global challenges and
          democratizing the internet.
        </Paragraph>
      </Container>
    </Flex>
  </Layout>
);

export default IndexPage;
