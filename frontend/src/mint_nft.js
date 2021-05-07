import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"
import {tx} from "./tx"

const CODE = fcl.cdc`
    import MediaNFTContract from 0xMediaNFTContract

    transaction(ipfsUrl: String) {
        let receiverRef: &{MediaNFTContract.NFTReceiver}
        let minterRef: &MediaNFTContract.NFTMinter

        prepare(acct: AuthAccount) {
            self.receiverRef = acct.getCapability<&{MediaNFTContract.NFTReceiver}>(/public/NFTReceiver)
                .borrow()
                ?? panic("Could not borrow receiver reference")        
            
            self.minterRef = acct.borrow<&MediaNFTContract.NFTMinter>(from: /storage/NFTMinter)
                ?? panic("could not borrow minter reference")
        }

        execute {
            let metadata : {String : String} = {
                "name": "TMD Project Proposal",
                "rating": "5",
                "uri": "ipfs://Qmb4MMsKy69DKWA4h3brBRaK3eu74sSupVNrLhVf89hc23"
            }
            let newNFT <- self.minterRef.mintNFT()
        
            self.receiverRef.deposit(token: <-newNFT, metadata: metadata)

            log("NFT Minted and deposited to Account 2's Collection")
        }
    }`

export function mintNFT(ipfsUrl, opts = {}) {
    console.log("minting NFT")
    return tx([
        fcl.transaction(CODE),
        fcl.args([
            fcl.arg(String(ipfsUrl), t.String)
        ]),
        fcl.proposer(fcl.authz),
        fcl.payer(fcl.authz),
        fcl.authorizations([
            fcl.authz
        ]),
        fcl.limit(1000)
    ], opts);
}