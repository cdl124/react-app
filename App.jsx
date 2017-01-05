import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
        <p>Array: {this.props.propArray}</p>
        <p>Bool: {this.props.propBool ? "True dat" : "FALSE"}</p>
        <p>Integer: {this.props.propInt}</p>
        <p>Object: {this.props.propObject.objectName1}</p>
        <p>Object: {this.props.propObject.objectName2}</p>
      </div>
    );
  }
}

App.propTypes = {
  header: React.PropTypes.string,
  propArray: React.PropTypes.array.isRequired,
  propBool: React.PropTypes.bool.isRequired,
  propInt: React.PropTypes.number,
  propObject: React.PropTypes.object
}

App.defaultProps = {
  header: "Some types of datuhhh",
  propArray: [1,3,5,7,9],
  propBool: true,
  propInt: 3,
  propObject: {
    objectName1: "Name number one",
    objectName2: "Name number two"
  }
}

export default App;
