import React, {Component} from 'react';
import axios from 'axios';
import MintNFT from './MintNFT';

class PinFileToIPFS extends Component {
    constructor() {
        super();
        this.state = {
            filename: null,
            selectedFile: null,
            uploadedIpfsUrl: null,
            showMinting: false
        }

        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            filename: event.target.value
        })
    }
    
    handleFileChange(event) {
        this.setState({
            selectedFile: event.target.files[0]
        });
    }

    submit() {
        const data = new FormData();
        data.append('file', this.state.selectedFile);

        const pinFileToIpfsApi = "https://api.pinata.cloud/pinning/pinFileToIPFS";
        const pinataApiKey = "67477cbad6dcd9f3a852";
        const pinataSecretApiKey = "2da73a2cc9761f8555658f378a7c5a219d8d9d9fe0823e4ebec0285fbf4add8c";

        const metadata = JSON.stringify({
            name: this.state.filename,
            keyvalues: {
                exampleKey: 'exampleValue',
                state: 'unverified'
            }
        });
        data.append('pinataMetadata', metadata);
        console.log(metadata)

        axios
            .post(pinFileToIpfsApi, data, {
                // maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
                headers: {
                    'Content-Type': 'multipart/form-data',
                    pinata_api_key: pinataApiKey,
                    pinata_secret_api_key: pinataSecretApiKey
                }
            })
            .then(function (response) {
                //handle response here
                if (response.status === 200) {
                    console.log(response);
                    console.log(`https://ipfs.io/ipfs/${response.data.IpfsHash}`)
                    return `https://ipfs.io/ipfs/${response.data.IpfsHash}`
                }
                console.log(response);
            })
            .then((data) => {
                this.setState({
                    uploadedIpfsUrl: data,
                    showMinting: true
                })
            })
            .catch(function (error) {
                //handle error here
                console.log(error);
            });
        
    }

    render() {
        return(
            <div className="App">
                <form>
                    <input
                        type="text"
                        name="filename"
                        placeholder="Filename"
                        onChange={this.handleNameChange}
                    />
                
                    <div className="file-uploader">
                    <input
                        type="file"
                        onChange={this.handleFileChange}
                    />
                    <button type="button" className="btn btn-primary" onClick={() => this.submit()} >Upload</button>
                    </div>
                </form>
                <div>
                    {this.state.showMinting?
                        [
                            <p>IPFS URL: <a href={this.state.uploadedIpfsUrl}>
                                {this.state.uploadedIpfsUrl}
                            </a>
                            </p>,
                            <MintNFT />
                        ]
                        : null
                    }
                </div>
            </div> 
        );
    }
}

export default PinFileToIPFS;