import React, { Component } from 'react';
import Issues from '../Issue';


class App extends Component {


  render() {

    return (

        <div className="App">
        <h2>reactjs/reactjs.org</h2>
        <Issues
          repositoryName={'reactjs.org'}
          repositoryOwner={'reactjs'}

        />


        </div>
    );
  }
}

export default App;
