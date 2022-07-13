---
title: "Talk Notes: Defining the Web3 Stack (Nader Dabit)"
slug: talk-summary-defining-the-web3-stack
date_published: 2021-10-26T19:21:48.000Z
date_updated: 2021-10-26T19:23:21.000Z
tags: 
  - Software Development
excerpt: Notes taken during Nader Dabit's "Defining the Web3 Stack" during Next.js Conf.
feature_image: https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGV0aGVyZXVtfGVufDB8fHx8MTYzNTI3NTMyNg&ixlib=rb-1.2.1&q=80&w=2000
---

Nader Dabit transitioned from a Web2 role at AWS to the Web3 world at Edge & Node. He recently gave a talk at Next.js Conf on the tech stack to build with Web3 technologies. Here are some notes that I took on the talk.

## Web3

- The decentralized web
- Web1: read-only web. You needed to be a dev to create; everyone else was a consumer.
- Web2: read/write/interactive web. Anyone can be a creator.
- Web3: web protocols (SSH, TCP, HTTP) + native payments & state
- Buying on the internet vs building the internet

### Attributes of Web3

- Decentralized
- Ownership of data/platform
- Native digital payments
- Self-sovereign identity
- Distributed trustless & robust infra
- Open and public backends
- Apps compete on interfaces for the same data

## Types of Applications

### Play-to-Earn Gaming

- **Fortnite**. Web3-fying a Web2 game. 100% of money to this game cannot be taken out. Axie Infinity allows players to earn tokens by playing. 95% of money goes back to the users/players of the game.

### DeFi & Stable Currencies

- Inflation and government crisis in Venezuela, Lebanon, Zimbabwe, Sudan
- People need to leave the country because they've lost their ability to provide for themselves and their families
- Stable coins are pegged against the US dollar; people can get paid in these instead of their local currencies
- 1.7B people are unbanked; Web3 can provide access to this under-served demographic

### Social Media

- **Web2**: exploitation, advertising, zero ownership. Exchange your content for hearts and likes (gain followers)
- **Web3**: tokenization, content ownership (follower gains)

### Music

- [Audius](https://audius.co/)

### Blogging

- [Mirror.xyz](https://mirror.xyz/)

## Building Web3

### API Layer

- How do you query data from blocks on the blockchain? The data isn't as easy to query as Web2 databases.
- [The Graph](https://thegraph.com/en/).

### Off Chain Data

- [Ceramic Network](https://ceramic.network/).

### Video Streaming

- [Livepeer](https://livepeer.org/). 10x cheaper than any other centralized alternative.

### File Storing

- [IPFS](https://ipfs.io/). Decentralized file storage network; not guaranteed how long the files will be stored
- [Arweave.org](https://www.arweave.org/). Protocol that allows you to store files permanently.

### Authentication & Wallets

- Public key encryption using some time of wallet
- [Metamask](https://metamask.io/)
- [Rainbow](https://rainbow.me/)

## Core Infrastructure

- Typical infrastructure + smart contracts
- Progressive decentralization --> full decentralization
- Client framework, Blockchain, Client library, Wallet
- **Building a dapp**: Ethereum, Avalanche, Solana, Fantom, Near
- **Ethereum Virtual Machine (EVM)**: learning this will allow you to build on several different blockchains
- **Starter Stack**: Next.js, Hardhat, Ethersj.js, Metamask
- [https://github.com/scaffold-eth/scaffold-eth](https://github.com/scaffold-eth/scaffold-eth)
