import MediaNFTContract from 0xf8d6e0586b0a20c7

pub fun main() : [{String: String}] {
    let nftOwner = getAccount(0xf8d6e0586b0a20c7)
    log("NFT Owner")
    let capability = nftOwner.getCapability<&{MediaNFTContract.NFTReceiver}>(/public/NFTReceiver)

    let receiverRef = capability.borrow()
        ?? panic("Could not borrow the receiver reference")

    let metadataList: [{String: String}] = []
    for i in receiverRef.getIDs() {
        metadataList.append(receiverRef.getMetadata(id: i))
    }
    return metadataList
    
}