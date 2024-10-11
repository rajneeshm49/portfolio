import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App />);
root.render(
  <BrowserRouter history={createBrowserHistory()}>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
