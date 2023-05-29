import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import CreateExpo from "./components/CreateExpo";
import ShowExpoDetails from "./components/ShowExpoDetails";
import ShowExpoList from "./components/ShowExpoList";
import UpdateExpoInfo from "./components/UpdateExpoInfo";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<ShowExpoList />} />
          <Route path="/create-expo" element={<CreateExpo />} />
          <Route path="/edit-expo/:id" element={<UpdateExpoInfo />} />
          <Route path="/show-expo/:id" element={<ShowExpoDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
