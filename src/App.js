import React from "react";
import Wall from "./components/Wall";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      term: ""
    };
  }

  onChange = event => {
    this.setState({ term: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };

  render() {
    return (
      <div>
        <form className="" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>guardar</button>
        </form>
        <Wall items={this.state.items} />
        <p>only this paragraph will get the style assas)</p>
        <style jsx>{`
          p {
            color: red;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
