import logo from './logo.svg';
import './App.css';
import Page1 from './component/Page1';
import Page2 from './component/Page2';
import Page3 from './component/Page3';
import Page4 from './component/Page4';
import Page5 from './component/Page5';
import Page6 from './component/Page6';
import Page7 from './component/Page7';
import Page8 from './component/Page8';
import ImageSlider from './component/ImageSlider';
import Leader from './component/Leader';


function App() {
  const images = [
    './Images/14.jpeg',
    './Images/15.jpeg',
    './Images/16.jpeg',
    
    // Add more image URLs here
  ];

  return (
    <div className="App">
       {/* <Page8 />
       <ImageSlider images={images} /> 
      <Page1 />
       <Page2 />
      <Page3 />
       <Page4 />
      <Page7 />
      <Page6 /> */}
      <Page5 /> 

      {/* <Leader />  */}
 


    </div>
  );
}

export default App;

