import React from 'react';
import './App.css';

import ConversationConnector from './pages/connectors/conversationConnector';

// qimport { register } from './serviceWorker';

function App() {
    return (
        <div className="p-grid">
            <div className="p-col-12" style={{backgroundColor: '#00bfa5', height: '5em'}}></div>
            <div className="p-col" style={{backgroundColor: '#F0F8FF'}}>
                <ConversationConnector/>
            </div>

        </div>
    );
}

export default App;
