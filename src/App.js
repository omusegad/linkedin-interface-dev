import './App.css';
import Header from './Components/Header';
import BottomHeaderAdvert from './Components/BottomHeaderAdvert';
import MainContent from './Components/MainContent';

function App() {
  return (
    <>
     <Header/>
     <div className="">
        <BottomHeaderAdvert/>
        <MainContent/>
     </div>
    </>
  );
}

export default App;
