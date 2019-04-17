module.exports = {
  siteMetadata: {
    title: `Ethereum`,
    description: `The worlds largest community solving global challenges and democratizing the internet.`,
    author: `@deepwork_studio`,
    news: {
      articles: [
        {
          date: ``,
          title: ``,
          link: ``
        }
      ]
    },
    learn: {
      "Current Applications": [
        {
          title: ``,
          subtitle: ``,
          image: ``,
          link: `https://www.notion.so/deepworkstudio/Ethereum-57ac0bf920714551ac017a1cd874e8ed#1c1ea0d7c22d4026843999f5b446c651`
        },
        {
          title: ``,
          subtitle: ``,
          image: ``,
          link: `https://www.cryptokitties.co/`
        },
        {
          title: ``,
          subtitle: ``,
          image: ``,
          link: `https://bounties.network/`
        },
        {
          title: ``,
          subtitle: ``,
          image: ``,
          link: `https://dev.status.im/`
        },
        {
          title: ``,
          subtitle: ``,
          image: ``,
          link: `https://medium.com/loom-network/ethereum-will-be-the-backbone-of-the-new-internet-88718e08124f`
        }
      ],
      "Value Exchange": [
        {
          title: ``,
          subtitle: ``,
          image: ``,
          link: `https://www.newsbtc.com/2019/04/17/ethereum-eth-price-smashes-resistance-175-could-be-next/`
        },
        {
          title: ``,
          subtitle: ``,
          image: ``,
          link: `https://hackernoon.com/bitcoin-ethereum-blockchain-tokens-icos-why-should-anyone-care-890b868cec06`
        },
        {
          title: ``,
          subtitle: ``,
          image: ``,
          link: `https://www.coindesk.com/data`
        },
        {
          title: ``,
          subtitle: ``,
          image: ``,
          link: `https://www.investinblockchain.com/ethereum-ecosystem-massive-adoption-as-ernst-young-rolls-out-free-software-running-on-top-of-the-public-ethereum-network-for-its-corporate-clients/`
        }
      ],
      Censorship: [
        {
          title: ``,
          subtitle: ``,
          image: ``,
          link: `https://blog.ethereum.org/2015/06/06/the-problem-of-censorship/`
        },
        {
          title: ``,
          subtitle: ``,
          image: ``,
          link: `http://fortune.com/2018/07/26/blockchain-technology-cryptocurrency-ethereum-censorship-free-speech/`
        },
        {
          title: ``,
          subtitle: ``,
          image: ``,
          link: `https://toshitimes.com/ethereum-is-being-used-to-circumvent-government-censorship-in-china-to-warn-against-ineffective-vaccines/`
        }
      ]
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ethereum`,
        short_name: `ethereum`,
        start_url: `/`,
        background_color: `#0E0F15`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    }
  ]
};
