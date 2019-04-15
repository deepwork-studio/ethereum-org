import React from "react";
import { Flex, Text, Box, Image } from "rebass";
import styled from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Card, { GradientBar } from "../components/Card";
import Paragraph from "../components/Paragraph";
import Caps from "../components/Caps";
import Header from "../components/Header";
import Container from "../components/Container";
import { Row, Col } from "../components/Grid";
import { Learn } from "../components/Images";
import Stunt from "../components/Stunt";
import { ExternalLink } from "../components/Links";
import theme from "../components/Theme/theme";

const ResourceCard = styled(Card).attrs({
  p: 3,
  as: "article",
  shadow: true,
  color: "text",
  bg: "primarydark"
})`
  height: 100%;

  transition-property: background-color;
  transition-duration: 250ms;

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.gossamerlight};
  }

  /* Allow nested Header component to animate  */
  > * {
    transition-property: color;
    transition-duration: 250ms;
  }

  img {
    vertical-align: middle;
  }
`;

const Sidebar = styled(Box).attrs({
  mr: [0, 4],
  mb: 4
})`
  @media screen and (min-width: 64em) {
    position: sticky;
    position: --webkit-sticky;
    top: calc(16px + 6px);
    height: 100%;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Learn" />

    <GradientBar gradient="gossamer" sticky />

    <Box as="section" my={[6, 7]}>
      <Container>
        <Box>
          <Learn />
          <Caps mt={4} mb={2}>
            learn
          </Caps>
          <Header fontSize="xxlarge">Why Ethereum?</Header>
        </Box>
      </Container>
    </Box>

    <Box my={[6, 7]}>
      <Container>
        <Flex flexDirection={["column", null,null, "row"]}>
          {/* Sidebar */}
          <Sidebar>
            <Paragraph mt={0} mb={3} lineHeight="double">
              <Text fontWeight="bold" as="span">
                The how and the why
              </Text>
              <Text as="br" />
              Top voted community resources:
            </Paragraph>

            <Flex>
              <Box width={4} mr={3} bg="gossamerlight" />
              <Paragraph fontWeight="bold" color="gossamerlight" my={1}>
                Mission and Vision
              </Paragraph>
            </Flex>

            <Paragraph>What is Ethereum</Paragraph>

            <Paragraph>Inspiration</Paragraph>

            <Paragraph>Latest Projects Updates</Paragraph>

            <Paragraph>Latest Projects</Paragraph>
          </Sidebar>

          {/* Content */}
          <Box flex={1}>
            <Row flexWrap="wrap">
              <Col mb={4}>
                <ExternalLink
                  href="https://ethereum.org"
                  css={{ height: "100%" }}
                >
                  <ResourceCard>
                    <Box mx={-3} mt={-3} flex={1} css={{ height: 200 }}>
                      <Image
                        css={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                          objectPosition: "center"
                        }}
                        src="https://picsum.photos/1440/900/?random"
                      />
                    </Box>
                    <Header lineHeight="title" color="inherit" mt={3}>
                      Fair Financial Dist.
                    </Header>
                    <Paragraph mt={3} mb={0}>
                      Odds are you’ve heard about the Ethereum blockchain. So
                      what is it?
                    </Paragraph>
                  </ResourceCard>
                </ExternalLink>
              </Col>
              <Col mb={4}>
                <ExternalLink
                  href="https://ethereum.org"
                  css={{ height: "100%" }}
                >
                  <ResourceCard>
                    <Box mx={-3} mt={-3} flex={1} css={{ height: 200 }}>
                      <Image
                        css={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                          objectPosition: "center"
                        }}
                        src="https://picsum.photos/1280/720/?random"
                      />
                    </Box>
                    <Header lineHeight="title" color="inherit" mt={3}>
                      The Internet Money
                    </Header>
                    <Paragraph mt={3} mb={0}>
                      A collection of talks by Andreas M. Antonopoulos about why
                      blockchain matters.
                    </Paragraph>
                  </ResourceCard>
                </ExternalLink>
              </Col>
              <Col mb={4}>
                <ExternalLink
                  href="https://ethereum.org"
                  css={{ height: "100%" }}
                >
                  <ResourceCard>
                    <Box mx={-3} mt={-3} flex={1} css={{ height: 200 }}>
                      <Image
                        css={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                          objectPosition: "center"
                        }}
                        src="https://picsum.photos/720/480/?random"
                      />
                    </Box>
                    <Header lineHeight="title" color="inherit" mt={3}>
                      Own your own value
                    </Header>
                    <Paragraph mt={3} mb={0}>
                      Check out the many great projects on State of the Dapps
                      being built on Ethereum.
                    </Paragraph>
                  </ResourceCard>
                </ExternalLink>
              </Col>
              <Col mb={4}>
                <ExternalLink
                  href="https://ethereum.org"
                  css={{ height: "100%" }}
                >
                  <ResourceCard>
                    <Box mx={-3} mt={-3} flex={1} css={{ height: 200 }}>
                      <Image
                        css={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                          objectPosition: "center"
                        }}
                        src="https://picsum.photos/1336/768/?random"
                      />
                    </Box>
                    <Header lineHeight="title" color="inherit" mt={3}>
                      Democratize the internet
                    </Header>
                    <Paragraph mt={3} mb={0}>
                      Check out the many great projects on State of the Dapps
                      being built on Ethereum.
                    </Paragraph>
                  </ResourceCard>
                </ExternalLink>
              </Col>
            </Row>
          </Box>
        </Flex>
      </Container>
    </Box>

    <Stunt />
  </Layout>
);

export default IndexPage;
