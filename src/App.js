
import {BrowserRouter as Router,Route,Routes,} from "react-router-dom";

import UserPage from "./pages/UserPage";
import LoadFile from "./pages/LoadFile";
import NotFoundPage from "./pages/NotFoundPage";
import NavBarMaterial from "./components/NavBarMaterial";
import Graph from "./pages/Graph";
import UserAplication from "./pages/UseAplication";

function App() {
  return (
   <Router>
          <NavBarMaterial/>
     <Routes>
       <Route path="/user" element={<UserPage/>}></Route>
       <Route path="/file" element={<LoadFile/>}></Route>
       <Route path="/graph/:id" element={<Graph/>}></Route>
       <Route path="/" element={<UserAplication/>}></Route>
       <Route path="*" element={<NotFoundPage/>}></Route>
     </Routes>
   </Router>
  );
}

export default App;
