import "./App.css";
import Navbar from "./component/Navbar";
import { useSelector, useDispatch } from "react-redux";


function App() {
  return (
   
    <div className="flex justify-center gap-4 flex-col min-h-screen items-center">
      <Navbar />
      {/* <h1 className="text-3xl">Hello World!</h1>
      <p className="text-lg">This is a React & Tailwind CSS starter pack.</p> */}

    </div>
  );
}

export default App;
