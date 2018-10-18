import React from 'react';
import ReactDOM from 'react-dom';
import Inputarea from '../src/Inputarea.js';

const App = () => (
    <div className="container">
      <h1>Inputarea</h1>
      <p className="lead">Expandable textarea React component</p>
      <div className="form-group">
        <label>Example Inputarea</label>
        <Inputarea className="form-control" name="inputarea" id="inputarea" rows="3" placeholder="Input text here" />
      </div>
      
    </div>
  );

ReactDOM.render(<App />, document.getElementById('root'));