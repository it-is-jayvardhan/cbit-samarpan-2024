import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import { Suspense, lazy } from 'react';
import Loading from './components/loading';
import BIRDS from "vanta/src/vanta.birds";
import { useEffect } from 'react';
import Footer from './components/Footer.js';
const Home=lazy(()=>import('./components/home'));
const Registration=lazy(()=>import('./components/registration'));
const Participants=lazy(()=>import('./components/Participants.js'));
const Painting=lazy(()=>import('./components/events/painting.js'));
const PencilSketch=lazy(()=>import('./components/events/PencilSetch.js'));
const Debate=lazy(()=>import('./components/events/Debate.js'));
const EssayWriting=lazy(()=>import('./components/events/EssayWriting.js'));
const Quiz=lazy(()=>import('./components/events/Quiz.js'));
const Photography=lazy(()=>import('./components/events/Photography.js'));
const Singing=lazy(()=>import('./components/events/Singing.js'));
const Dance=lazy(()=>import('./components/events/Dance.js'));
const Skit=lazy(()=>import('./components/events/Skit.js'));
const Anchoring=lazy(()=>import('./components/events/Anchoring.js'));
const Rangoli=lazy(()=>import('./components/events/Rangoli.js'));
const Mehandi=lazy(()=>import('./components/events/Mehandi.js'));
const CulturalScreening=lazy(()=>import('./components/events/Cultural.js'));
const TreasureHunt=lazy(()=>import('./components/events/treasureHunt.js'));
const DumbSharades=lazy(()=>import('./components/events/dumbSharades.js'));
const Cooking=lazy(()=>import('./components/events/cookingWithoutFire.js'));
const Winners=lazy(()=>import('./components/Winners.js'));
const Gallery=lazy(()=>import('./components/Gallery.js'));
const Anthyakshari=lazy(()=>import('./components/events/Anthyakshari.js'));
function App() {
  useEffect(()=>{
    const birdsEffect =BIRDS({
      el:"#bg",
      mouseControls: true,
  touchControls: true,
  gyroControls: true,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: "#85c4ec",
  color2: 0x812be,
  birdSize: 1.30,
  separation: 44.00,
  alignment: 28.00,
  cohesion: 43.00,
  quantity: 3.00,
  backgroundAlpha: 0 // Set the background to transparent
    })

    return () => {
      if (birdsEffect) birdsEffect.destroy();
      
    };
    
  },[])
  return (
    <div id='bg'>
      <div id="app">
      <div id="birds">
    <div className="App">
      <Navbar />
      <Suspense fallback={<Loading/>}>
      <Routes>
      <Route path="*" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        <Route path="/Participants" element={<Participants/>}/>
        <Route path="/Painting" element={<Painting/>}/>
        <Route path="/PencilSketch" element={<PencilSketch/>}/>
        <Route path="/Debate" element={<Debate/>}/>
        <Route path="/EssayWriting" element={<EssayWriting/>}/>
        <Route path="/Quiz" element={<Quiz/>}/>
        <Route path="/Photography" element={<Photography/>}/>
        <Route path="/Singing" element={<Singing/>}/>
        <Route path="/Dance" element={<Dance/>}/>
        <Route path="/Skit" element={<Skit/>}/>
        <Route path="/Anchoring" element={<Anchoring/>}/>
        <Route path="/Rangoli" element={<Rangoli/>}/>
        <Route path="/Mehandi" element={<Mehandi/>}/>
        <Route path="/CulturalScreening" element={<CulturalScreening/>}/>
        <Route path="/TreasureHunt" element={<TreasureHunt/>}/>
        <Route path="/DumbSharades" element={<DumbSharades/>}/>
        <Route path="/Cooking" element={<Cooking/>}/>
        <Route path="/Winners" element={<Winners/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Anthyakshari" element={<Anthyakshari/>}/>
        </Routes>
        </Suspense>
        <br/><br/><br/>
        <Footer/>

    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
//  {/* <Link to={`/${page}`}>{page}</Link> */}