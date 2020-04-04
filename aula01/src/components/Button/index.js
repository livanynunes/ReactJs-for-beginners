import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component{
    // static defaultProps={
    //     title: 'Comportamento default'
    // }

    // static propTypes = {
    //     title: PropTypes.string.isRequired
    // }

    state={

    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }

    render(){
        return(
            // <div>
                // {this.props.title}-{this.props.descricao}
                <button onClick={this.props.press}>{this.props.children}</button>
            // </div>s
        );
    }
}

export default Button;