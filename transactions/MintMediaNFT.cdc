import MediaNFTContract from 0xf8d6e0586b0a20c7

transaction {
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
}