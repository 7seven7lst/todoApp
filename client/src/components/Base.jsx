import React from 'react';
import { Link, IndexLink } from 'react-router';


const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">Incomplete</IndexLink>
      </div>
      <div className="top-bar-left">
        <Link to="/completed">Completed</Link>
      </div>

    </div>

    { /* child component will be rendered here */ }
    {children}

  </div>
);

export default Base;
