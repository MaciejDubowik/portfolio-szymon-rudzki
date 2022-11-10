import Navbar from "./components/Navbar";
import ImgSlider from "./components/ImgSlider";


function App() {
  return (
      <div className=' bg-[url("../public/images/background-image.jpg")] h-screen w-full absolute bg-cover filter brightness-75' >

          <Navbar />
          <ImgSlider />
      </div>
  );
}

export default App;
