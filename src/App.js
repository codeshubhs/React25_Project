//import Accordian from './components/Accordian';
import './App.css';
//import RandomColor from './components/Random-color';
import ImageSlider from './components/image-slider';
import SliderData from './components/image-slider/SliderData';


function App() {
  return (
    <div className="App">
    {/* <Accordian/>*/ } 

    {/* Random Color generator */}
    {/*<RandomColor/>*/}
    <h1 style={{fontFamily:'cursive'}}>Image Slider</h1>
    <ImageSlider slides={SliderData}/>
    </div>
  );
}

export default App;
// Accordian two types one open with single selection 
// second open is with multi selection 