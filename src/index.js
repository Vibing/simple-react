import React from './react';
import ReactDOM from './reactDOM';

class App extends React.Component {
  render() {
    return <div>Hello world</div>;
  }
}

ReactDOM.render(document.getElementById('root'), <App />);
