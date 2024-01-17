import Header from "./components/Header";
import HeroSection from "./components/Hero_section";
import PicFrame from "./components/PhotoSlideFrame";
import Sidebar from "./components/Sidebar";
import "./components_css/Setting.css";
function App() {
  return (
    <body>
      <Header />
      <HeroSection />
      <Sidebar />
      <PicFrame />
    </body>
  );
}

export default App;
