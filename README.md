Reference: https://medium.com/pinata/how-to-create-nfts-like-nba-top-shot-with-flow-and-ipfs-701296944bf

## Dev Setup (MacOS)

Installing Flow Cli
```
brew install flow-cli
```

Other requirements:
* NodeJS
* Optional: Cadence language server on VSCode (or other preferred IDE)

## Commands

### Starting Flow emulator
```
flow project start-emulator
```

### Deploying smart contract
```
flow project deploy
```
* save the account address from the output and modify the `flow.json` and import statement for the smart contract accordingly

### Generating Public and Private key for signing transaction 
* only needs to be done once and the private key should be updated in `flow.json`
```
flow keys generate
```

### Minting an NFT
* mints the NFT specified in `./transactions/MintMediaNFT.cdc` (to mint NFT for different object - change the IPFS uri)
```
flow transactions send --code ./transactions/MintMediaNFT.cdc --signer emulator-account
```

### Verifying the minted NFT
* to verify different NFT - change `id` in `CheckTokenMetadata.cdc`
```
flow scripts execute --code ./scripts/CheckTokenMetadata.cdc
```