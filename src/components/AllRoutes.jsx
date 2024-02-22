import { Routes, Route,Navigate } from "react-router-dom"; 
import About from "../pages/About";
import Contect from "../pages/Contect";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Users from "../pages/Users";
import SingleUser from "../pages/SingleUser";
import NotFound from "../pages/NotFound";

function PrivateRoute(props){
    let IsLoggedIn = true;
    if(!IsLoggedIn){ //Here i want that only logged user can access the "user" section. 
        return <Navigate to="/login" />;//if not logged use try to access the "user" section then redirect to
        // the login section.
    }
    return props.children;
}
function AllRoutes(){
    return (<>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contect" element={
        <PrivateRoute >
           <Contect />
        </PrivateRoute>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Users" element={
        <PrivateRoute>
          <Users />
        </PrivateRoute>} />
        <Route path="/Users/:user_id" element={
        <PrivateRoute>
          <SingleUser />
        </PrivateRoute>} />
        <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </>)
}

export default AllRoutes;