import React from 'react';
import ReactDOM from 'react-dom';
import {SpeechProvider} from '@speechly/react-client'

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(        
 <SpeechProvider appId="37e36697-fc5a-4915-8c63-f0379b7b3ee6" language="en-US">
  <Provider>
      <App/>
  </Provider>
  </SpeechProvider>,
   document.getElementById('root')
)
