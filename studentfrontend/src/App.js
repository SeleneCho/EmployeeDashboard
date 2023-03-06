import "./App.css";
import Appbar from "./components/Appbar";
import RightPanel from "./components/RightPanel";
import Home from "./views/Home";

function App() {
  return (
    <div className="App w-full min-h-screen bg-white flex flex-row">
      <Appbar />
      <Home />
      <RightPanel />
    </div>
  );
}

export default App;
