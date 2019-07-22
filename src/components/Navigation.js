import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="to">Home</Link>
        </div>
        <div>
          <Link to="to">About</Link>
        </div>
        <div>
          <Link to="to">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
