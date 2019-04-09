import React from "react";
import { Flex } from "rebass";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Card, { GradientBar } from "../components/Card";
import Paragraph from "../components/Paragraph";
import Header from "../components/Header";
import Container from "../components/Container";
import { Row, Col } from "../components/Grid";
import { Developers, Logo, Learn, News } from "../components/Images";
import { InternalLink as Link } from "../components/Links";

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
        <Logo mb={5} mt={[4, 0]} />

        <Row>
          <Col mb={[4, 0]}>
            <Link flex={1} to="/developers/">
              <IndexPageCard>
                <GradientBar gradient="richblue" />
                <Developers mb={80} />
                <Header as="h2" color="richblue">
                  Build Unstoppable Organizations
                </Header>
                <Paragraph mb={0} mt={2}>
                  Developer Tools
                </Paragraph>
              </IndexPageCard>
            </Link>
          </Col>

          <Col mb={[4, 0]}>
            <Link flex={1} to="/learn/">
              <IndexPageCard>
                <GradientBar gradient="gossamer" />
                <Learn mb={80} />
                <Header as="h2" color="gossamer">
                  Why Ethereum?
                </Header>
                <Paragraph mb={0} mt={2}>
                  Learn
                </Paragraph>
              </IndexPageCard>
            </Link>
          </Col>

          <Col mb={[4, 0]}>
            <Link flex={1} to="/news/">
              <IndexPageCard>
                <GradientBar gradient="tapestry" />
                <News mb={80} />
                <Header as="h2" color="tapestry">
                  News and Community
                </Header>
                <Paragraph mb={0} mt={2}>
                  Newsroom
                </Paragraph>
              </IndexPageCard>
            </Link>
          </Col>
        </Row>

        <Paragraph mt={[4, 5]}>
          The worlds largest community solving global challenges and
          democratizing the internet.
        </Paragraph>
      </Container>
    </Flex>
  </Layout>
);

export default IndexPage;
