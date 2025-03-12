import ShowListPage from "./Pages/ShowListPage";
import { Route, Routes } from "react-router-dom";
import ShowDetailPage from "./Pages/ShowDetailPage";

function App() {
  return (
    <div className="p-2">
      <Routes>
        <Route index element={<ShowListPage />} />
        <Route path="/:id" element={<ShowDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
