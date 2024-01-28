import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HeadLine from "./components/HeadLine/HeadLine";
import Food from "./components/Food/Food";
import Category from "./components/Category/Category";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeadLine />
      <Food />
      <Category />
    </>
  );
}

export default App;
