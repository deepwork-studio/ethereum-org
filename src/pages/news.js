import React from "react";
import { Flex, Text, Box } from "rebass";
import styled from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { GradientBar } from "../components/Card";
// import Paragraph from "../components/Paragraph";
import Caps from "../components/Caps";
import Header from "../components/Header";
import Container from "../components/Container";
// import { Row, Col } from "../components/Grid";
import { News } from "../components/Images";
import Stunt from "../components/Stunt";
import { ExternalLink } from "../components/Links";
import theme from "../components/Theme/theme";

const ArticleTitle = styled(Text).attrs({
  fontSize: ["large", "xlarge"],
  lineHeight: "copy"
})``;

const ArticleLink = styled(ExternalLink)`
  display: block;

  ${Text},
  ${ArticleTitle} {
    color: ${theme.colors.text};
    transition: color 250ms;
  }

  &:hover,
  &:focus {
    ${Text} {
      color: ${theme.colors.tapestry};
    }
    ${ArticleTitle} {
      color: ${theme.colors.tapestrydark};
    }
  }
`;

const NewsArticle = ({ date, title, href, ...rest }) => (
  <ArticleLink href={href} {...rest} mb={4}>
    <Flex flexDirection={["column", "row"]}>
      <Text as="p" mb={[2, 0]} mt={1} width={[1, 1 / 4]} lineHeight="copy">
        {date}
      </Text>
      <ArticleTitle as="p" m={0} width={[1, 3 / 4]}>
        {title}
      </ArticleTitle>
    </Flex>
  </ArticleLink>
);

const IndexPage = () => (
  <Layout>
    <SEO title="News" />

    <GradientBar gradient="tapestry" sticky />

    <Box as="section" my={[6, 7]}>
      <Container px={[4, 0]}>
        <Box>
          <News />
          <Caps mt={4} mb={2}>
            Newsroom
          </Caps>
          <Header fontSize="xxlarge">Community and News</Header>
        </Box>
      </Container>
    </Box>

    <Box my={[6, 7]}>
      <Container px={[4, 0]}>
        <Flex flexDirection={["column", null, "row"]}>
          {/* Content */}
          <Box flex={1} mr={[0, 4]}>
            <NewsArticle
              date="13 April 2019"
              href="https://cointelegraph.com/news/ethereum-core-developers-consider-more-frequent-and-smaller-hard-forks"
              title="Ethereum Core Developers Consider More Frequent and Smaller Hard Forks"
            />
            <NewsArticle
              date="10 April 2019"
              href="https://cointelegraph.com/news/blockchain-prediction-platform-augur-to-launch-stablecoin-dai-denominated-markets"
              title="Blockchain Prediction Platform Augur to Launch Stablecoin DAI-Denominated Markets"
            />
            <NewsArticle
              date="09 April 2019"
              href="https://cointelegraph.com/news/cryptocurrency-lending-firm-dharma-launches-its-service-to-the-public"
              title="Cryptocurrency Lending Firm Dharma Launches Its Service to the Public"
            />
          </Box>

          {/* Sidebar */}
          <Flex
            mx={["auto", null, "unset"]}
            bg="primary"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width={300}
            css={{ height: 300 }}
          >
            <Caps textAlign="center" mt={0} mb={3}>
              Contact
            </Caps>
            <Text my={0} fontFamily="worksans">
              <ExternalLink
                color="tapestrylight"
                href="mailto:media@ethereum.org"
              >
                media@ethereum.org
              </ExternalLink>
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>

    <Stunt />
  </Layout>
);

export default IndexPage;
