import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "Header from props",
      content: "Content from props"
    }
  }

  render() {
    return (
      <div>
        <Header headerProp = {this.state.header} />
        <Content contentProp = {this.state.content} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.headerProp}</h1>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.contentProp}</p>
      </div>
    );
  }
}

export default App;
