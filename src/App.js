
import {BrowserRouter as Router, Navigate,Route,Routes,} from "react-router-dom";
import UserPage from "./pages/UserPage";
import LoadFile from "./pages/LoadFile";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";
import Graph from "./pages/Graph";
function App() {
  return (
   <Router>
     <NavBar/>
     <Routes>
       <Route path="/user" element={<UserPage/>}></Route>
       <Route path="/file" element={<LoadFile/>}></Route>
       <Route path="/graph/:id" element={<Graph/>}></Route>
       <Route path="*" element={<NotFoundPage/>}></Route>
       <Route path="/" element={<NotFoundPage/>}></Route>
     </Routes>
   </Router>
  );
}

export default App;
