import React from "react";
import styled, { css } from "styled-components";
import { Box, Image } from "rebass";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Card, { GradientBar } from "../components/Card";
import Paragraph from "../components/Paragraph";
import Caps from "../components/Caps";
import Header from "../components/Header";
import Container from "../components/Container";
import { Row, Col } from "../components/Grid";
import { Developers } from "../components/Images";
import Stunt from "../components/Stunt";
import { ExternalLink } from "../components/Links";
import theme from "../components/Theme/theme";

import smartContractBadge from "../images/smart-contract.svg";
import solidityBadge from "../images/solidity.svg";

const CallToActionCard = ({ image, children, ...rest }) => (
  <Card {...rest} shadow bg="primary">
    <Box p={56} pl={120} css={{ position: "relative", overflow: "hidden" }}>
      <GradientBar
        gradient="richblue"
        gradientHeight="thin"
        css={css`
          opacity: 0;
          transition: opacity 250ms;

          ${Card}:hover & {
            opacity: 1;
          }
        `}
      />
      <Image
        src={image}
        css={{
          position: "absolute",
          left: -32,
          top: "50%",
          transform: "translateY(-50%)"
        }}
      />
      {children}
    </Box>
  </Card>
);

const HoverHeader = styled(Header)`
  transition: color 250ms;

  ${Card}:hover & {
    color: ${theme.colors.richblue};
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Developers" />

    <GradientBar gradient="richblue" />

    <Box as="section" mt={[128 + 6, 256 + 6]} mb={[6, 7]}>
      <Container px={[4, 0]}>
        <Box>
          <Developers />
          <Caps mt={4} mb={2}>
            Problems to solve
          </Caps>
          <Header fontSize="xxlarge">What could you build?</Header>
        </Box>
      </Container>
    </Box>

    <Box my={[6, 7]}>
      <Container px={[4, 0]}>
        <Paragraph mt={0} mb={5}>
          Ideas voted by the Ethereum community:
        </Paragraph>

        <Row>
          <Col>
            <Box mb={4}>
              <Header>Scalability</Header>
              <Paragraph>
                Join one of the teams working on scaling Ethereum to millions of
                transactions a second.
              </Paragraph>
            </Box>

            <Box mb={4}>
              <Header>Be your own bank</Header>
              <Paragraph>
                Use Ethereum’s shared global infrastructure to create
                unstoppable finanical tools.
              </Paragraph>
            </Box>

            <Box>
              <Header>Virtual Organizations</Header>
              <Paragraph>
                Create a democratic autonomous organization with governance
                structures.
              </Paragraph>
            </Box>
          </Col>
          <Col>
            <Box ml={5} flex={1} bg="primary" />
          </Col>
        </Row>
      </Container>
    </Box>

    <Box my={[6, 7, 8]}>
      <Container px={[4, 0]}>
        <Row>
          <Col mb={[4, 0]}>
            <ExternalLink flex={1} href="https://ethereum.org/">
              <CallToActionCard image={smartContractBadge}>
                <HoverHeader>Start Building</HoverHeader>
                <Header as="p" fontWeight="medium">
                  Smart Contract Docs
                </Header>
              </CallToActionCard>
            </ExternalLink>
          </Col>
          <Col mb={[4, 0]}>
            <ExternalLink flex={1} href="https://ethereum.org/">
              <CallToActionCard image={solidityBadge}>
                <HoverHeader>Learn Solidity</HoverHeader>
                <Header as="p" fontWeight="medium">
                  Solidity Docs
                </Header>
              </CallToActionCard>
            </ExternalLink>
          </Col>
        </Row>
      </Container>
    </Box>

    <Stunt />
  </Layout>
);

export default IndexPage;
