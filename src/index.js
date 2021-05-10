import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './routerRender'
import reportWebVitals from './reportWebVitals';
// import {useCallbackExample} from './extra/useCallback'

ReactDOM.render(
  <React.StrictMode>
    <Index />
     {/* {useCallbackExample()} */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
