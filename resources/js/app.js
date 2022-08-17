require('./bootstrap');
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header} from "./Component/Header/Header";
import ReactDOM from "react-dom/client";

const App = () => {
  
    return (
      <div className="App">
        <BrowserRouter>
  
              <Routes>
                <Route path="/" element={<Header />} />
              </Routes>
        </BrowserRouter>
      </div>
    );
  };
  
  export default App;
// if (document.getElementById('hello-react')) {
//     ReactDOM.render(<HelloReact />, document.getElementById('hello-react'));
// }
ReactDOM.createRoot(document.querySelector("#root")).render(<App />);

