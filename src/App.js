import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header.js';
import Sidebar from './Sidebar.js';

function App() {
  return (
    <div className="app">
 
      {/* Header */}
      <Header />
      {/* App body */}
      <div className="app_body">
        {/* sidebar */}
        <Sidebar />
        <Feed />
        {/* feed */}
        {/* widgedts */}
      </div>


    </div>
  );
}

export default App;
