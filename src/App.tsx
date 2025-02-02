import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import CryptoProvider from './context/CryptoContext';

function App() {
  return (
    <CryptoProvider>
      <Header />
      <Main />
    </CryptoProvider>
  );
}

export default App;
