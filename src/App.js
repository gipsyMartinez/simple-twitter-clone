import React from "react";
import List from "./List";

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
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
