import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { AllComponents } from './AllComponents';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AllComponents />
  </React.StrictMode>
);