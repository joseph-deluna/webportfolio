import React from 'react';

// Components
import Speaker from '../components/Speaker';
import TV from '../components/TV';
import Books from '../components/Books';
import Profile from '../components/Profile';
import Window from '../components/Window';
import Picture from '../components/Picture';
import Message from '../components/Message.js';
import Work from '../components/Work';
import Games from '../components/Games';

function Jose() {
  return (
    <div className="jose">
      <div className="container side-nav">
      <div className='header'><h1>I'm Joseph, Welcome to my Portfolio</h1><p>&copy; Copyright 2024 Portal Project, TheDreamer Co. Ltd.</p></div>
        <Books />
        <Speaker />
        <TV />
          <Window />
        <Profile />
        <Picture />
        <Message />
        <Games />
        <Work />
        
      </div>
    </div>

  );
}

export default Jose;