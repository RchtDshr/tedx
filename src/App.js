// import SecondPg from "./Components/SecondPg";
import Loader from "./Components/Loader";
import $ from 'jquery';
import { useState, useEffect } from "react";
// import Hero from "./Components/Hero";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Whyus from "./Components/Whyus";
// import {Routes, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar";

function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    const onPageLoad = () => {
      setTimeout(() => {
        $("#content").fadeIn(1000)
        setLoading(false)
      }, 5500)
    }

    if (document.readyState === 'complete'){
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);

      return () => window.removeEventListener('load', onPageLoad)
    }
  },[])
  return (
    <div className="App">
      {
        loading?
          <Loader /> //works if loader is true else neeche wala
          :
          <>
          <div className="content">
            <Navbar/>
            {/* <Hero/> */}
            {/* <SecondPg/> */}
            <Whyus/>
            <About/>
          {/* <Routes> */}
          {/* <Route path="/home" element={<Hero/>}/> */}
            {/* <Route path="/aboutus" element={<About/>}/> */}
          {/* </Routes> */}
          </div>
          <Footer/>
          </>
      }
    </div>
  );
}

export default App;
