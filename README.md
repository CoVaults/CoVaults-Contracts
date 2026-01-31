# StacksFort - Secure Multisig Vault on Stacks

StacksFort is a decentralized multi-signature vault platform built on the Stacks blockchain. It enables organizations, DAOs, and teams to securely manage their STX and SIP-010 fungible token assets with flexible threshold signature schemes.

![StacksFort Banner](https://placehold.co/1200x400/212121/ffffff/png?text=StacksFort+Multisig)

## 🔐 Key Features

*   **Multi-Signature Security**: Configure up to 100 signers with custom threshold requirements (e.g., 2-of-3, 5-of-7).
*   **Asset Support**: Native support for **STX** transfers and **SIP-010** fungible tokens (like sBTC, ALEX, DIKO).
*   **Off-Chain Signing**: Gas-efficient signing process where signatures are collected off-chain and verified on-chain in a single transaction.
*   **Security First**:
    *   ✅ **Reentrancy Protection**: Prevents reentrancy attacks during execution.
    *   ✅ **Transaction Expiration**: Time-bound proposals to prevent stale transactions from being executed.
    *   ✅ **Verified Contracts**: Checks token contract authenticity before execution.
*   **Signer Management**: (In Progress) Add/Remove signers and update thresholds via multisig voting.

## 🏗️ Project Structure

The project is organized as a monorepo containing both the smart contracts and the frontend application.

```
stacksfort/
├── contract/          # Clarity smart contracts & Clarinet configuration
│   ├── contracts/     # Source code (stacksfort-multisig.clar)
│   └── tests/         # Vitest + Clarinet SDK unit tests
├── frontend/          # Next.js web application
│   ├── app/           # App Router pages
│   └── components/    # React UI components
└── README.md          # This file
```

## 🚀 Quick Start

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher)
*   [Clarinet](https://github.com/hirosystems/clarinet) (for contract development)
*   [Stacks Wallet](https://www.hiro.so/wallet) (Leather or Xverse)

### 1. Smart Contracts

Navigate to the contract directory to run tests and deploy.

```bash
cd contract
npm install

# Run the test suite (Vitest + Clarinet SDK)
npm run test

# Deploy to local Devnet
clarinet integrate
```

### 2. Frontend Application

Navigate to the frontend directory to launch the web interface.

```bash
cd frontend
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📖 Documentation

*   [Smart Contract Documentation](./contract/README.md) - detailed function API and error codes.
*   [Frontend Documentation](./frontend/README.md) - component structure and integration guide.
*   [Issues & Roadmap](./contract/issues.md) - current progress and planned features.

## 🔒 Security

The core multisig contract (`stacksfort-multisig.clar`) implements several security best practices:
*   **Checks-Effects-Interactions** pattern to prevent state inconsistencies.
*   **Reentrancy Locks** on all execution functions.
*   **Signature Verification** using `secp256k1-recover` to ensure signer authenticity.
*   **Expiration Checks** using block height to invalidate old proposals.

## 📄 License

This project is licensed under the MIT License.
