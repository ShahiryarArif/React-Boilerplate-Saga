import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Router } from "react-router";
import { BrowserRouter } from "react-router-dom";
import browserHistory from "./utils/history";
import { CookiesProvider } from "react-cookie";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

import { persistStore } from "redux-persist";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
let persistor = persistStore(store);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={browserHistory}>
        <BrowserRouter>
          <CookiesProvider>
            <Suspense fallback={"Loading..."}>
              <App />
            </Suspense>
          </CookiesProvider>
        </BrowserRouter>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
