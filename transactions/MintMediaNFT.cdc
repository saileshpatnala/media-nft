import MediaNFTContract from 0xf8d6e0586b0a20c7

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
      let ipfsBase = "ipfs:\\"
      let metadata : {String : String} = {
          "status": "unverified",
          "uri": ipfsBase.concat(ipfsUrl)
      }
      let newNFT <- self.minterRef.mintNFT()
  
      self.receiverRef.deposit(token: <-newNFT, metadata: metadata)
  }
}