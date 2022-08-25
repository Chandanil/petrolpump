require("./bootstrap");
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Login } from "./Component/Login/Login";
import { Home } from "./Component/Dashboard/Home";
import { useState } from "react";
import { Product } from "./Component/InnerPage/ProductForm/Product";
import { Sidebar } from "./Component/Dashboard/Sidebar/Sidebar";
import { Header } from "./Component/Dashboard/Header/Header";
import axios from "axios";
import { Saleform } from "./Component/InnerPage/Saleform/Saleform";
import { Managesale } from "./Component/InnerPage/ManageSale/Managesale";

const App = () => {
    const [showSidebar, setShowSidebar] = useState(true);
    const sidebarToggle = () => {
        setShowSidebar(!showSidebar);
    };

    var location = window.location.pathname;

    axios.defaults.baseURL = "http://127.0.0.1:8000";
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.headers.post["Accept"] = "application/json";
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    axios.interceptors.request.use(function (config) {
      const token = localStorage.getItem("auth_token");
      config.headers.Authorization = token ? `Bearer ${token}` : "";
      return config;
    });

    return (
        <div className="App">
            <BrowserRouter>
                {location === "/" ? (
                    <Routes>
                        <Route path="/" element={<Login />} />
                    </Routes>
                ) : (
                    <div
                        className={`site-content clearfix 
                        ${showSidebar === false ? "hide-sidebar" : ""}`}
                    >
                        <aside className="widget-area  leftsidebar">
                            <Sidebar />
                        </aside>
                        <section className="wrapper-content">
                            <Header
                                sidebarToggle={sidebarToggle}
                                showSidebar={showSidebar}
                            />
                            <Routes>
                                <Route path="/home" element={<Home />} />
                                <Route
                                    path="/productsale"
                                    element={<Product />}
                                />
                                  <Route
                                    path="/newsale"
                                    element={<Saleform />}
                                />
                                <Route path='/managesale' element={<Managesale />}/>
                            </Routes>
                        </section>
                    </div>
                )}
            </BrowserRouter>
        </div>
    );
};

export default App;
// if (document.getElementById('hello-react')) {
//     ReactDOM.render(<HelloReact />, document.getElementById('hello-react'));
// }
ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
