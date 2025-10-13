# CKB-JS Pokemon

A blockchain-based Pokemon NFT collection platform built on the CKB (Nervos Network) blockchain using CKB-JS-VM smart contracts.

## 🎴 Overview

This project implements a Pokemon NFT collection platform where users can:
- Purchase Pokemon NFTs using PokePoints (custom token system)
- Build their Pokemon collection with varying rarities and prices
- Manage their Pokemon collection through a modern React web interface

## What You'll Learn

By working through this demo, you’ll see how to:

- Deploy and interact with CKB smart contracts using JavaScript/TypeScript
- Mint, transfer, and trade NFTs (Pokémon) using a fungible token as in-app token.
- Connect a React frontend to blockchain logic through CCC wallet integration.
- Reuse these patterns to build your own:
    - NFT or collectible dApps
    - Marketplaces with in-app tokens
    - Tokenized reward/point systems
    - …

## 🏗️ Project Structure

```
ckb-js-pokemon/
├── app/                     
│   ├── app/                  # Next.js frontend for the Pokémon NFT dApp
│   ├── public/               # Static assets (icons, images)
│   └── package.json          # Configuration and dependencies
├── contracts/                # Smart contracts for tokens and NFTs
│   ├── poke-point/           # CKB cell model fungible token (“PokePoint”)
│   │   ├── src/              # Token logic: mint, transfers and utils
│   │   ├── tests/            # Test suite for PokePoint Contract
│   │   └── migrations/
│   ├── pokemon/              # NFT contract for Pokémon collectibles
│   │   ├── src/              # NFT logic: issue, purchase, transfer, burn, utils
│   │   ├── tests/            # Test suite for Pokemon Contract
│   │   └── migrations/
├── scripts/                  # Node scripts for deployment and token issuance
│   ├── fetch-pokemon-data.js # Fetches Pokémon metadata from external API
│   └── issue-pokemon.js      # Issues Pokémon NFTs via the deployed contracts
├── DEPLOYMENT.md             # Deployment instructions for contracts & frontend
├── TUTORIAL.md               # Written tutorial for minting, owning and trading Pokémon
└── README.md                 # Project overview and getting-started guide
```

- **[Frontend App](app/README.md)**: Next.js application with React components and CKB wallet integration
- **[PokePoint Contract](contracts/poke-point/README.md)**: Custom token contract for platform currency (10 CKB = 1 PokePoint)
- **[Pokemon Contract](contracts/pokemon/README.md)**: NFT contract for Pokemon collectibles with integrated pricing

## Quick Start

### Option 1: Try it online

Visit the hosted demo: [ckb-js-pokemon-app.vercel.app](https://ckb-js-pokemon-app.vercel.app/)

### Option 2: Run locally

### Prerequisite

- Node.js ≥ 18
- pnpm

1. Clone the github repo and navigate to the folder
```bash
git clone https://github.com/cryptape/ckb-js-pokemon.git
cd ckb-js-pokemon
```

2. Start your local server and view on http://localhost:3000

```bash
# Install dependencies
pnpm install

# Build smart contracts
pnpm build:contracts

# Start frontend development server
pnpm dev
```


## 🔧 Development Commands

```bash
# Frontend
pnpm dev                    # Start development server
pnpm build                  # Build for production
pnpm lint                   # Run linting

# Smart Contracts
pnpm build:contracts        # Build all contracts
pnpm test:contracts         # Run contract tests
pnpm clean:contracts        # Clean contract builds

# Utilities
pnpm issue-pokemon          # Issue Pokemon NFTs (requires deployed contracts)
```

## 📚 Documentation

- **[Deployment Guide](DEPLOYMENT.md)**: Complete smart contract deployment instructions
- **[Frontend App](app/README.md)**: React/Next.js application details
- **[PokePoint Contract](contracts/poke-point/README.md)**: Token contract implementation
- **[Pokemon Contract](contracts/pokemon/README.md)**: NFT contract implementation

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ on the CKB blockchain