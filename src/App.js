import React, { Component } from 'react';
import Header from "./Home/Header";
import FromjsSetInGetIntIs from "./Home/FromjsSetInGetIntIs";
class App extends Component {
  render() {
    return (
      <div className="App">
		<Header/>
		<FromjsSetInGetIntIs/>
      </div>
    );
  }
}

export default App;
