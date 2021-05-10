import './App.css';
import AuthCluster from './AuthCluster';
import TokenData from './TokenData';
import PinFileToIPFS from './PinFileToIPFS'

function App() {
  return (
    <div className="App">
      <AuthCluster />
      {/* <TokenData /> */}
      <PinFileToIPFS />
    </div>
  );
}
export default App;
