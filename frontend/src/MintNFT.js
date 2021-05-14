import React, {Component} from 'react';
import {mintNFT} from './mint_nft';

class MintNFT extends Component {
    constructor() {
        super();
        this.state = {
            ipfs_url: null,
            transaction_id: null
        }

        this.handleIPFSChange = this.handleIPFSChange.bind(this);
    }


    handleIPFSChange(event) {
        this.setState({
            ipfs_url: event.target.value
        });
    }

    submit() {
        mintNFT(this.state.ipfs_url)
    }

    render() {
        return(
            <div className="App">
                <form>
                    <input 
                        type="text" 
                        name="ipfs" 
                        placeholder="IPFS Hash" 
                        onChange={this.handleIPFSChange} />
                    <button 
                        type="button" 
                        className="btn btn-primary" 
                        onClick={() => this.submit()}>
                            Mint NFT 
                    </button>
                </form>
            </div>
        );
    }
}   

export default MintNFT;