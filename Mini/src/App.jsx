import {Routers,Route} from "react-router-dom";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import UpdateRestaurant from "./pages/UpdateRestaurant";
import ProtectedRoute from "./routes/ProtectedRoute";


function App(){

  return(

    <Routers>

      <Route path="/" element={<Login />} />

      <Route
        path="/admin/dashboard"
        elements={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
        ></Route>

        <Route
        path="/admin/restaurant/updates"
        elements={
          <ProtectedRoute role="admin">
            <UpdateRestaurant />
          </ProtectedRoute>
        }
        ></Route>

        <Route
        path="/customers/dashboard"
        elements={
          <ProtectedRoute role="customer">
            <CustomerDashboard />
          </ProtectedRoute>
        }
        ></Route>

    </Routers>
  );
}

export default App;