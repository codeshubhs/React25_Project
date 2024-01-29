//import Accordian from './components/Accordian';
import './App.css';
import LightDarkMode from './components/Light_Dark_Mode';
import LoadMoreData from './components/LoadMore_button';
import QrCodeGenerator from './components/QR_code_generate';
//import RandomColor from './components/Random-color';
import ImageSlider from './components/image-slider';
import SliderData from './components/image-slider/SliderData';

import GithubProfileFinder from './components/github-profile-finder';
import UseFetchHookTest from './components/use-fetch/UseFetchHookTest';
function App() {
  return (
    <div className="App">
    {/* <Accordian/>*/ } 

    {/* Random Color generator */}
    {/*<RandomColor/>*/}
   {/* <h1 style={{fontFamily:'cursive'}}>Image Slider</h1>
    <ImageSlider slides={SliderData}/>
  </div>*/}

  {/*<LoadMoreData/>*/}
 {/*<QrCodeGenerator/>*/} 

 {/*<LightDarkMode/> */}

 {/* <GithubProfileFinder/>*/}
 <UseFetchHookTest/>
  </div>
  );
}

export default App;
// Accordian two types one open with single selection 
// second open is with multi selection 