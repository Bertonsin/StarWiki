import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FilmsPage } from "../Pages/FilmsPage";
import { Home } from "../Pages/Home";
import { ItemPage } from "../Pages/ItemPage";
import { People } from "../Pages/People";
import { PlanetsPage } from "../Pages/PlanetsPage";
import { StarShipsPage } from "../Pages/StarShipsPage";

export function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="people" element={<People />}>
          <Route path=":id" element={<ItemPage />} />
        </Route>
        <Route path="planets" element={<PlanetsPage />} />
        <Route path="films" element={<FilmsPage />} />
        <Route path="starships" element={<StarShipsPage />} />
        <Route path=":category/info/:id" element={<ItemPage />} />
      </Routes>
    </Router>
  );
}
