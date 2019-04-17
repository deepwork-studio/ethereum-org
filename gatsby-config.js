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
          title: `Digital Cats?!`,
          subtitle: `CryptoKitties is a game centered around breedable, collectible, and oh-so-adorable creatures we call CryptoKitties!`,
          image: `https://www.cryptokitties.co/images/share.png`,
          link: `https://www.cryptokitties.co/`
        },
        {
          title: `My Cat Is Better than Yours`,
          subtitle: `How CryptoKitties are different from Bitcoins and real cats — and why that matters`,
          image: `https://cdn-images-1.medium.com/max/1000/1*3swNWJqRX7h47_gXvPEScQ.png`,
          link: `https://medium.com/cryptokitties/what-the-heck-is-a-cryptokitty-4e14752e58c`
        },
        {
          title: `Changing the way we collaborate.`,
          subtitle: `The Bounties Network empowers humans to incentivize and self-organize, from freelancing to grassroots social action, and anything in between.`,
          image: `https://cdn-images-1.medium.com/max/1000/1*ywSIL1SNhUY6CnVLxjwKMg.png`,
          link: `https://bounties.network/`
        },
        {
          title: `A New Way to Access the Web`,
          subtitle: `Chat, browse and transact securely in an open source community committed to bringing the power of Ethereum and a more distributed internet to your pocket.`,
          image: `https://our.status.im/content/images/2019/03/Release-cover-0.11.0.png`,
          link: `https://dev.status.im/`
        },
        {
          title: `A New Internet?`,
          subtitle: `Loom Network is building our Layer 2 on top of Ethereum, instead of other blockchain platforms — and here’s why.`,
          image: `https://cdn-images-1.medium.com/max/1000/1*9gSuypCiTrSwMCy18OJdyg.png`,
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
