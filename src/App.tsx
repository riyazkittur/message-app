import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import React from 'react';
import logo from './logo.svg';

import './App.css';



import { Conversation } from './pages/components/messages/conversation';

function App() {
  return (
    <div className="p-orderlist-list">
      <Conversation/>
    </div>
  );
}

export default App;
