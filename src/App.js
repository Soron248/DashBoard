import "./App.css";
import MainDash from "./Components/MainDash/MainDash";
import RightSide from "./Components/RightSide/RightSide";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <SideBar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
