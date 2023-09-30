import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./Home";
import EmployeeView from "./component/employee/EmployeeView";
import NavBar from "./component/common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployee from "./component/employee/AddEmployee";
import EmployeeProfile from "./component/employee/EmployeeProfile";
import EditEmployee from "./component/employee/EditEmployee";

function App() {
  return (
    <main className="container mt-5">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/view-employees"
            element={<EmployeeView />}
          ></Route>
          <Route exact path="/add-employees" element={<AddEmployee />}></Route>
          <Route
            exact
            path="/employee-profile/:id"
            element={<EmployeeProfile />}
          ></Route>
          <Route
            exact
            path="/edit-employee/:id"
            element={<EditEmployee />}
          ></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
