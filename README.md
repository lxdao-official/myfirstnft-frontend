# My First NFT Frontend

MyFirstNFT is a non-profit instructional project for Web3 newbies. Get a FREE NFT while learning about Web3, NFT, and security. Buidl in [LXDAO](https://lxdao.io/).

- MyFirstNFT Website: <https://myfirstnft.info>
- MyFirstNFT Twitter: <https://twitter.com/mfnft_official>
- LXDAO Website: <https://lxdao.io/>
- LXDAO Forum: <https://forum.lxdao.io/c/projects/001-mfnft/14>
- LXDAO Telegram: <https://t.me/LXDAO>
- LXDAO Twitter: <https://twitter.com/LXDAO_Official>

As it is a public goods, all of the source code are open sourced:

- Main Website: <https://github.com/lxdao-official/myfirstnft-frontend>
- Backend API: <https://github.com/lxdao-official/myfirstnft-backend>
- NFT Contract: <https://github.com/lxdao-official/myfirstnft-contract>

Enjoy!

## Start the app

Get the code first:

```
git clone https://github.com/lxdao-official/myfirstnft-frontend.git
cd myfirstnft-frontend
```

Copy `.env.sample` and rename it to `.env` and put data in it, then:

```
yarn install
yarn run dev
```

Then open <http://localhost:3000> start developing. And also you need to start backend app for minting. Check more on the MyFirstNFT Backend API: <https://github.com/lxdao-official/myfirstnft-backend>.

## `.env` explanation

- `NEXT_PUBLIC_CHAIN_ID` is the Chain ID, you can search from https://besu.hyperledger.org/en/stable/Concepts/NetworkID-And-ChainID and set an apposite value.
- `NEXT_PUBLIC_GOOGLE_ANALYTICS` is the application id in the google analytics tool, you can get from https://analytics.google.com.
- `NEXT_PUBLIC_CONTRACT_ADDRESS` is the smart contract address used to mint. The smart contract project has been [open source](https://github.com/GuoChanLiangXin/myfirstnft-contracts), and you can deploy it owned.
- `MFNFT_BACKEND_API` is the backend service network api.
- `NEXT_PUBLIC_INFURA_PROJECT_ID` is the project id in the `infura` service, you can get from https://infura.io.

Example from the MyFirstNFT production environment:

```
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-VPF0TRZGBT
NEXT_PUBLIC_CHAIN_ID=1
NEXT_PUBLIC_CONTRACT_ADDRESS=0x3d0172a432A1E861Df1434E44F815D32E9bed5cC
MFNFT_BACKEND_API=https://xxxx
NEXT_PUBLIC_INFURA_PROJECT_ID=10a6......68e3
```

## Code of Conduct

1. Please use English in this project by default (code comments, git commit message, variable name, etc).
2. Please install prettier plugin and keep the same code style.
3. Please have a discussion and confirmation first before introducing some new libraries or packages, keep them as simple as possible.

## I18N

Please use English Text by default like the following:

```
import { t } from '@lingui/macro';

...
<Typography variant="h6" component="div" gutterBottom>
  {t`Connect Wallet`}
</Typography>
...
```

> Note: For a long sentence, we can make a short key for translation mapping, but short sentence or title, which is not changed often, we can use it directly, rather than make a key.

Then run `yarn run extract` to extract all strings out of code, you will find your strings in `/locale/en/messages.po` file.

You can also find the same strings in `/locale/zh/messages.po`, so you need to add translation in that `.po` file, and run `yarn run compile`, this command will compile `.po` file into `.js` file so that front-end code can read it and apply it.

## What is LXDAO?

LXDAO is an R&D-focused DAO in Web3. Our mission is: To bring together buidlers to buidl and maintain valuable projects for Web3, in a sustainable manner.

<a target="_blank" href="https://lxdao.io/"><img alt="Buidl in LXDAO" src="public/buildinlxdao.png" width="180" /></a>
