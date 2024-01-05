import { useState } from "react";
import Header from "./UI/header/Header";
import "./App.css";
import Sidebar from "./UI/sidebar/Sidebar";
import MainContent from "./UI/main-content/MainContent";
import Content from "./UI/main-content/Content";
function App() {
  const [hideSidebar, setHideSidebar] = useState(false);

  return (
    <>
      <Header />
      <Sidebar hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
      <MainContent hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
      <Content />
    </>
  );
}

export default App;
