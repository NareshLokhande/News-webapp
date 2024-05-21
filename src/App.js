import { AllNews } from "./components/AllNews";
import { Navigation } from "./components/Navigation";
import { TopHeadlines } from "./components/TopHeadlines";
import { Weather } from "./components/Weather";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<TopHeadlines/>}></Route>
        <Route path="/all-news" element={<AllNews/>}></Route>
        <Route path="/weather" element={<Weather/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
