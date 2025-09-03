# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MyFirstNFT is a Next.js-based educational Web3 application that teaches users about NFTs, blockchain, and Web3 security while providing a free NFT minting experience. Built by LXDAO as a public good project.

## Development Commands

```bash
# Install dependencies
yarn install

# Development server
yarn run dev

# Build for production
yarn run build

# Export static site
yarn run export

# Start production server
yarn start

# Lint code
yarn run lint

# I18n commands
yarn run extract    # Extract translatable strings
yarn run compile    # Compile translations
```

## Environment Setup

Copy `.env.sample` to `.env` and configure:

- `NEXT_PUBLIC_CHAIN_ID` - Blockchain network ID (1 for mainnet)
- `NEXT_PUBLIC_CONTRACT_ADDRESS` - NFT contract address
- `NEXT_PUBLIC_INFURA_PROJECT_ID` - Infura project ID for Web3 connectivity
- `MFNFT_BACKEND_API` - Backend service API endpoint
- `NEXT_PUBLIC_GOOGLE_ANALYTICS` - Google Analytics tracking ID

## Architecture

### Core Structure
- **pages/**: Next.js pages (main entry point is `index.js`)
- **sections/**: Large page sections (SectionMint, SectionWallet, etc.)
- **components/**: Reusable UI components (ConnectWallet, Donation, etc.)
- **hooks/**: Custom React hooks for state management
  - `useWallet` - Web3 wallet connection and management
  - `useProgress` - User progress through tutorial steps
  - `useMintData` - NFT minting state and data
- **utils/**: Utility functions for Web3 operations (IPFS upload, signature generation)
- **layouts/**: Page layout components

### Key Technologies
- **Next.js 12** with React 17
- **Material-UI (MUI)** for components and styling
- **Ethers.js** for blockchain interactions
- **Web3Modal** for wallet connections
- **Lingui** for internationalization (English/Chinese)

### State Management
Uses React Context API with custom hooks:
- `WalletContext` - Wallet connection state
- `ProgressContext` - Tutorial progression
- `MintDataContext` - NFT minting data

## Internationalization

Uses Lingui for i18n with English as default:

```javascript
import { t } from '@lingui/macro';

// Use directly for short text
{t`Connect Wallet`}
```

After adding new strings:
1. Run `yarn run extract` to update `.po` files
2. Add translations in `/locale/zh/messages.po`
3. Run `yarn run compile` to generate JS files

## Code Standards

- Use English for all code (comments, variables, commit messages)
- Follow existing MUI/Material-UI patterns
- Maintain Web3 security best practices
- Use existing utility functions in `utils/` for blockchain operations
- Follow the established section-based page structure