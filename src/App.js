import { BrowserRouter, Routes, Route } from "react-router-dom";

import RecipePage from "./pages/recipe/RecipePage";
import HomePage from "./pages/home/HomePage";
import Feature from "./pages/feature/Feature";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/recipe" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
