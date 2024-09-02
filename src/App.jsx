import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { autoLogin } from "./redux/store/Slices/userSlice";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(autoLogin())
  },[dispatch])
  return (
    <div className="App">

        <Header />
        <main className="AppBody">
          <Outlet />
        </main>
        <Footer />

    </div>
  );
}

export default App;