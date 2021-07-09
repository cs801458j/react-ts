import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
    ,
  document.getElementById('root')
);

// 명령어 $ npm install react-router-dom @types/react-router-dom -> 돔 셋팅 안되면 확인해보기
// https://velog.io/@swimme/React-Typescript-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0