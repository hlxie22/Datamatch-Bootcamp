import React from 'react';

import { Link } from 'react-router-dom';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div>
        <Link to="/editor">Go to card editor</Link>
        <Link to="/viewer">Go to card viewer</Link>
      </div>
    );
  }
}
export default Homepage;