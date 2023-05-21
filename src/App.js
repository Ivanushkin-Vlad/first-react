import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Home from './components/HomePag/Home';
import Error from './components/Error';
import Session from './components/Session/Session';
import Blog from './components/Blog/Blog';
import Blogs from "./components/Blogs/Blogs";
import Footer from './components/Footer/Footer';
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import Reviews from "./components/Reviews/Reviews";

function App({ data }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Header dB={data.header} />
      <Routes>
        <Route path='/Home' element={<Home data={data.home} />} />
        <Route path='/Session' element={<Session data={data.session} />} />
        <Route path='/Blog' element={<Blogs data={data.blogs.blog} />} />
          <Route path='/Reviews' element={<Reviews />} />
      </Routes>
      <Footer data={data.footer} />

    </div>
  );
}

export default App;
