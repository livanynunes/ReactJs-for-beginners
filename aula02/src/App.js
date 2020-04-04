import React, {Component} from 'react';

class App extends Component{

    state={
       personagens: []

    }

    async componentWillMount() {
        try {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon');
          const dataJson = await response.json();

          this.setState({ personagens: dataJson.results });
        } catch (error) {
          console.log(error);
        }
      }


    render(){
        return (
           this.state.personagens.map(personagem => {
               return(
                   <div key={personagem.name}>
                       {personagem.name}
                   </div>
               )
           })
          );
    }
}


export default App;
