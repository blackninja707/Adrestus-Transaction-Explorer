import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import MainLayout from "./layout/MainLayout";

import useDarkMode from "./hooks/useDarkMode";
import "./App.css";

function App() {
  const { darkModeEnabled, toggleMode } = useDarkMode();
  return (
    <div className="App">
      <Navbar darkModeEnabled={darkModeEnabled} toggleMode={toggleMode} />
      <MainLayout />
      <Footer />
    </div>
  );
}

export default App;
