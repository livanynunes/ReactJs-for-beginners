import React, {Component} from 'react';
import { render } from 'react-dom';
import Button from './components/Button'

class App extends Component {
    state ={
        contador:0,
    }

    adicionar = ( ) => {
        this.setState({
            contador: this.state.contador +1,
        })
    }

  render() {
    return (
      <h1>
        Hello React!!
        {/* <Button title="teste" descricao="asasas"> */}
        contador : {this.state.contador}
        <Button press={this.adicionar}>
            Increase
        </Button>

      </h1>
    );
  }
}

render(<App />, document.getElementById('app'));