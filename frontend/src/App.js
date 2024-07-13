import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import { Provider } from "react-redux";
import { SideNav } from "./components/nav/SideNav";
import { Home } from "./components/home/Home";
import { CreatePlan } from "./components/plans/CreatePlan";
import { Notification } from "./components/utils/Notification";
import { Spinner } from "./components/utils/Spinner";
import { Cart } from "./components/cart/Cart";
import store from "./redux/store";
import Payment from "./components/cart/Payment";
import {OrderHistory} from "./components/plans/OrderHistory";

function App() {
  return (
    <BrowserRouter>
     <Provider store={store}> 
      <div className="app-container flex">
        <Notification/>
        <Spinner/>
        <SideNav />
        <div className="main-content w-[88%] bg-[#f7f8ff] min-w-[600px]">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-plan" element={<CreatePlan />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<Payment/>} />
            <Route path="/order-history" element={<OrderHistory/>} />
          </Routes>
        </div>
      </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
