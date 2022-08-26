
import './App.css';
import Address from '../src/Component/Full/Address'; 
import FullName from '../src/Component/Full/FullName';
import ProfilePhoto from '../src/Component/Full/ProfilePhoto'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <FullName/>
       <ProfilePhoto/>
       <Address/>
      </header>
    </div>
  );
}

export default App;
