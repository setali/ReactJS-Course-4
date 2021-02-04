import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import fa from 'antd/es/locale/fa_IR'
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ConfigProvider locale={fa} direction="rtl">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ConfigProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
