import About from "./components/About";
import MainHome from "./components/MainHome";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col pb-8">
      <Navbar />
      <MainHome />
      <About />
    </div>
  );
}
