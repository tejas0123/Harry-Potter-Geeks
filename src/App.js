import logo from './logo.svg';
import './App.css';
import './Components/Navbar'
import Navbar from './Components/Navbar';
import ImageArray from './Components/ImageArray';

function App() {
  return (
    <>
        <Navbar/>
        <h2 style={{"margin-top":"50px","text-align":'center', "fontSize":"35px"}}>Know The Houses!</h2>
        <ImageArray></ImageArray>
    </>
    
  );
}

export default App;
