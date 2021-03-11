import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import fa from "antd/es/locale/fa_IR";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";

ReactDOM.render(
  <ConfigProvider locale={fa} direction="rtl">
    <Provider store={store}>
      {/* <React.StrictMode> */}
      <Router>
        <App />
      </Router>
      {/* </React.StrictMode> */}
    </Provider>
  </ConfigProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
