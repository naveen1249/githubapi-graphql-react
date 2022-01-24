import React, { Component } from 'react';
import Issues from '../Issue';


class App extends Component {


  render() {

    return (

        <div className="App">
        <Issues
          repositoryName={'reactjs.org'}
          repositoryOwner={'reactjs'}

        />


        </div>
    );
  }
}

export default App;
