import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Home from './components/HomePag/Home';
import Error from './components/Error';
import Session from './components/Session/Session';
import Footer from "./components/Footer/Footer";
import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App({ data }) {
    useEffect(() => {
        Aos.init({duration:  2000});
    }, []);
  return (
      <div className="App">
          <Header dB={data.header}/>
          <Routes>
              <Route path='/Home' element={<Home data={data.home}/>}/>
              <Route path='/Session' element={<Session data={data.session}/>}/>
              <Route path="*" element={<Error/>}/>
          </Routes>
          <Footer data = {data.footer}/>
      </div>
  );
}

export default App;
